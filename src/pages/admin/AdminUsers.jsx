import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../auth/AuthContext";
import { Shield, Crown, User, Sparkles, Loader2 } from "lucide-react";

const RoleBadge = ({ role }) => {
  const config = {
    super_admin: {
      icon: Crown,
      className: "bg-amber-100 text-amber-800 border-amber-200",
    },
    admin: {
      icon: Shield,
      className: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
    cleaner: {
      icon: Sparkles,
      className: "bg-orange-100 text-orange-700 border-orange-200",
    },
    client: {
      icon: User,
      className: "bg-blue-100 text-blue-700 border-blue-200",
    },
  };
  const r = role || "client";
  const { icon: Icon, className } = config[r] || config.client;
  const label = r === "super_admin" ? "Super Admin" : r;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${className}`}
    >
      <Icon size={12} />
      {label}
    </span>
  );
};

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(null);
  const { isSuperAdmin } = useAuth();

  const fetchUsers = async () => {
    setError("");
    try {
      const { data, error: rpcErr } = await supabase.rpc("get_all_users");
      if (rpcErr) {
        const { data: profileData, error: profileErr } = await supabase
          .from("profiles")
          .select("id, email, first_name, last_name, phone, postcode, city, role, created_at")
          .order("created_at", { ascending: false });
        if (profileErr) throw profileErr;
        setUsers(profileData || []);
        if ((profileData || []).length === 0) {
          setError("No users found. Run supabase/migrations/003_admin_users_rpc.sql in Supabase SQL Editor.");
        }
        return;
      }
      setUsers(data || []);
    } catch (err) {
      setError(err.message || "Failed to load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSetRole = async (userId, newRole) => {
    setUpdating(userId);
    try {
      const { error } = await supabase.rpc("set_user_role", {
        target_user_id: userId,
        new_role: newRole,
      });
      if (error) throw error;
      await fetchUsers();
    } catch (err) {
      setError(err.message || "Failed to update role");
    } finally {
      setUpdating(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[280px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 sm:mb-8">
        Users
      </h1>
      {error && (
        <div className="mb-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm">
          {error}
        </div>
      )}
      <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-lg">
        {users.length === 0 ? (
          <div className="p-8 sm:p-12 text-center text-slate-500 text-sm sm:text-base">
            No users found. Run migrations 001–004 in your Supabase SQL Editor.
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-slate-100/80 border-b border-slate-200">
                    <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm font-semibold text-slate-700">Name</th>
                    <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm font-semibold text-slate-700">Email</th>
                    <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm font-semibold text-slate-700">Role</th>
                    <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm font-semibold text-slate-700">Phone</th>
                    <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm font-semibold text-slate-700">Postcode</th>
                    {isSuperAdmin && (
                      <th className="text-left px-4 lg:px-6 py-4 text-xs lg:text-sm font-semibold text-slate-700">Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 lg:px-6 py-4">
                        <span className="font-medium text-slate-800">
                          {u.first_name || u.last_name ? `${u.first_name || ""} ${u.last_name || ""}`.trim() : "-"}
                        </span>
                      </td>
                      <td className="px-4 lg:px-6 py-4 text-slate-600 text-sm">{u.email || "-"}</td>
                      <td className="px-4 lg:px-6 py-4">
                        <RoleBadge role={u.role} />
                      </td>
                      <td className="px-4 lg:px-6 py-4 text-slate-600 text-sm">{u.phone || "-"}</td>
                      <td className="px-4 lg:px-6 py-4 text-slate-600 text-sm">{u.postcode || "-"}</td>
                      {isSuperAdmin && (
                        <td className="px-4 lg:px-6 py-4">
                          {u.role !== "super_admin" && (
                            <div className="flex gap-2">
                              {u.role === "admin" ? (
                                <button
                                  onClick={() => handleSetRole(u.id, "client")}
                                  disabled={updating === u.id}
                                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors disabled:opacity-50 flex items-center gap-1"
                                >
                                  {updating === u.id ? <Loader2 size={12} className="animate-spin" /> : null}
                                  Remove Admin
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleSetRole(u.id, "admin")}
                                  disabled={updating === u.id}
                                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors disabled:opacity-50 flex items-center gap-1"
                                >
                                  {updating === u.id ? <Loader2 size={12} className="animate-spin" /> : null}
                                  Make Admin
                                </button>
                              )}
                            </div>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-slate-100">
              {users.map((u) => (
                <div key={u.id} className="p-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-medium text-slate-800">
                      {u.first_name || u.last_name ? `${u.first_name || ""} ${u.last_name || ""}`.trim() : "No name"}
                    </span>
                    <RoleBadge role={u.role} />
                  </div>
                  <p className="text-sm text-slate-600 mt-1 break-all">{u.email || "-"}</p>
                  <div className="flex gap-4 mt-2 text-xs text-slate-500">
                    <span>Phone: {u.phone || "-"}</span>
                    <span>Postcode: {u.postcode || "-"}</span>
                  </div>
                  {isSuperAdmin && u.role !== "super_admin" && (
                    <div className="mt-3 flex gap-2">
                      {u.role === "admin" ? (
                        <button
                          onClick={() => handleSetRole(u.id, "client")}
                          disabled={updating === u.id}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600"
                        >
                          {updating === u.id ? "..." : "Remove Admin"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSetRole(u.id, "admin")}
                          disabled={updating === u.id}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-100 text-indigo-700"
                        >
                          {updating === u.id ? "..." : "Make Admin"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
