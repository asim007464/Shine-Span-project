import React, { useState, useEffect } from "react";
import { Users, UserCheck, Sparkles, TrendingUp } from "lucide-react";
import { supabase } from "../../lib/supabase";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    clients: 0,
    cleaners: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: users, error } = await supabase.rpc("get_all_users");
        if (error) {
          const { count: userCount } = await supabase
            .from("profiles")
            .select("*", { count: "exact", head: true });
          const { count: clientCount } = await supabase
            .from("profiles")
            .select("*", { count: "exact", head: true })
            .eq("role", "client");
          const { count: cleanerCount } = await supabase
            .from("profiles")
            .select("*", { count: "exact", head: true })
            .eq("role", "cleaner");
          setStats({
            users: userCount ?? 0,
            clients: clientCount ?? 0,
            cleaners: cleanerCount ?? 0,
          });
          return;
        }
        const list = users || [];
        setStats({
          users: list.length,
          clients: list.filter((u) => (u.role || "client") === "client").length,
          cleaners: list.filter((u) => u.role === "cleaner").length,
        });
      } catch {
        setStats({ users: 0, clients: 0, cleaners: 0 });
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    {
      label: "Total Users",
      value: stats.users,
      icon: Users,
      gradient: "from-blue-500 to-indigo-500",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      shadow: "shadow-blue-500/20",
    },
    {
      label: "Clients",
      value: stats.clients,
      icon: UserCheck,
      gradient: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      shadow: "shadow-emerald-500/20",
    },
    {
      label: "Cleaners",
      value: stats.cleaners,
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      shadow: "shadow-amber-500/20",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 sm:mb-8">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`bg-white rounded-2xl border border-slate-200/80 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity rounded-full -translate-y-1/2 translate-x-1/2 bg-blue-400" />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                <p className="text-4xl font-bold text-slate-800 mt-1">
                  {card.value}
                </p>
              </div>
              <div
                className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center ${card.iconColor} shadow-lg ${card.shadow}`}
              >
                <card.icon className="w-7 h-7" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-8 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-lg">
        <h2 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
          <TrendingUp size={20} className="text-indigo-500" />
          Quick Actions
        </h2>
        <p className="text-slate-500 text-sm">
          Admin functionality can be extended here. Add booking management,
          cleaner assignments, and reports as needed.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
