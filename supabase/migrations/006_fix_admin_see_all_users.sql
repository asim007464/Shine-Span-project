-- Fix: Admins can't see other admins due to RLS recursion
-- Use SECURITY DEFINER function to break the recursion

-- Helper: Check if current user is admin/super_admin (bypasses RLS)
CREATE OR REPLACE FUNCTION public.is_admin_or_super_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
  )
  OR (auth.jwt()->>'email') = 'mwaseeemsajad@gmail.com'
  OR (auth.jwt()->>'email') LIKE '%@admin.shinespan.co.uk';
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_admin_or_super_admin() TO authenticated;

-- Drop old policy (causes recursion)
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- New policy using the helper (no recursion)
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (public.is_admin_or_super_admin());
