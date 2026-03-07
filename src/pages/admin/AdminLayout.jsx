import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, LogOut, Menu, Shield, Crown } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut, isAdmin, isSuperAdmin } = useAuth();
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate("/");
    return null;
  }

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const navItems = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/users", icon: Users, label: "Users" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 sm:w-72 bg-white/95 backdrop-blur border-r border-slate-200/80 shadow-xl lg:shadow-none transform transition-transform duration-200 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <Link
            to="/"
            className="block p-6 border-b border-slate-200/80 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
            onClick={() => setSidebarOpen(false)}
          >
            <h1 className="text-xl font-bold text-white">
              Shine <span className="text-amber-300">&</span> Span
            </h1>
            <p className="text-xs text-blue-100 mt-1 flex items-center gap-1.5">
              <Shield size={12} />
              Admin Panel
            </p>
          </Link>
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  }`
                }
              >
                <item.icon size={20} />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-200/80 space-y-2">
            <div className="px-4 py-2 flex items-center gap-2">
              {isSuperAdmin ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 text-xs font-semibold">
                  <Crown size={14} />
                  Super Admin
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-semibold">
                  <Shield size={14} />
                  Admin
                </span>
              )}
            </div>
            <div className="px-4 py-1 text-sm text-slate-500 truncate">
              {user?.email}
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 font-medium transition-colors"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <span className="text-sm font-medium text-slate-600 ml-2 lg:ml-0 flex items-center gap-2">
            {isSuperAdmin ? (
              <>
                <Crown size={16} className="text-amber-500" />
                Super Admin
              </>
            ) : (
              <>
                <Shield size={16} className="text-indigo-500" />
                Admin
              </>
            )}
          </span>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
