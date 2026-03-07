-- Fix: Ensure set_user_role exists and schema cache picks it up
-- Run this in Supabase SQL Editor if "Make Admin" fails

DROP FUNCTION IF EXISTS public.set_user_role(uuid, text);

CREATE FUNCTION public.set_user_role(target_user_id uuid, new_role text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  is_super_admin boolean := false;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = auth.uid() AND p.role = 'super_admin'
  ) INTO is_super_admin;

  IF NOT is_super_admin AND (auth.jwt()->>'email') IS NOT NULL THEN
    is_super_admin := (auth.jwt()->>'email') = 'mwaseeemsajad@gmail.com'
      OR (auth.jwt()->>'email') LIKE '%@admin.shinespan.co.uk';
  END IF;

  IF NOT is_super_admin THEN
    RAISE EXCEPTION 'Unauthorized: super admin access required';
  END IF;

  IF new_role NOT IN ('admin', 'client') THEN
    RAISE EXCEPTION 'Invalid role. Allowed: admin, client';
  END IF;

  IF EXISTS (SELECT 1 FROM public.profiles WHERE id = target_user_id AND role = 'super_admin') THEN
    RAISE EXCEPTION 'Cannot change super admin role';
  END IF;

  UPDATE public.profiles
  SET role = new_role, updated_at = NOW()
  WHERE id = target_user_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.set_user_role(uuid, text) TO authenticated;
