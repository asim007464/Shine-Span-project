-- Add super_admin role and make-admin functionality

-- Update "Admins can view all profiles" to include super_admin
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role IN ('admin', 'super_admin')
    )
  );

-- Drop old role constraint and add super_admin
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_role_check
  CHECK (role IN ('client', 'cleaner', 'admin', 'super_admin'));

-- Update get_all_users to allow both admin and super_admin
CREATE OR REPLACE FUNCTION public.get_all_users()
RETURNS TABLE (
  id uuid,
  email text,
  first_name text,
  last_name text,
  phone text,
  postcode text,
  city text,
  role text,
  created_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  is_admin boolean := false;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = auth.uid() AND p.role IN ('admin', 'super_admin')
  ) INTO is_admin;

  IF NOT is_admin AND (auth.jwt()->>'email') IS NOT NULL THEN
    is_admin := (auth.jwt()->>'email') = 'mwaseeemsajad@gmail.com'
      OR (auth.jwt()->>'email') LIKE '%@admin.shinespan.co.uk';
  END IF;

  IF NOT is_admin THEN
    RAISE EXCEPTION 'Unauthorized: admin access required';
  END IF;

  RETURN QUERY
  SELECT
    u.id,
    COALESCE(p.email, u.email::text),
    p.first_name,
    p.last_name,
    p.phone,
    p.postcode,
    COALESCE(p.city, 'London'),
    COALESCE(p.role, 'client'),
    COALESCE(p.created_at, u.created_at)
  FROM auth.users u
  LEFT JOIN public.profiles p ON p.id = u.id
  ORDER BY COALESCE(p.created_at, u.created_at) DESC NULLS LAST;
END;
$$;

-- RPC: Only super_admin can promote users to admin (or demote to client)
CREATE OR REPLACE FUNCTION public.set_user_role(target_user_id uuid, new_role text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  is_super_admin boolean := false;
BEGIN
  -- Only super_admin can call this
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

  -- Only allow setting to admin or client (super_admin cannot be assigned via this)
  IF new_role NOT IN ('admin', 'client') THEN
    RAISE EXCEPTION 'Invalid role. Allowed: admin, client';
  END IF;

  -- Prevent demoting another super_admin
  IF EXISTS (SELECT 1 FROM public.profiles WHERE id = target_user_id AND role = 'super_admin') THEN
    RAISE EXCEPTION 'Cannot change super admin role';
  END IF;

  UPDATE public.profiles
  SET role = new_role, updated_at = NOW()
  WHERE id = target_user_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.set_user_role(uuid, text) TO authenticated;

-- Set mwaseeemsajad@gmail.com as super_admin (run once)
UPDATE public.profiles p
SET role = 'super_admin', updated_at = NOW()
FROM auth.users u
WHERE p.id = u.id AND u.email = 'mwaseeemsajad@gmail.com';
