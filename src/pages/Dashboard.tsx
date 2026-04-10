import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'motion/react';
import { 
  Phone, 
  Users, 
  Calendar, 
  TrendingUp, 
  LogOut, 
  Settings, 
  MessageSquare,
  BarChart3,
  Clock
} from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUser(user);

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      setProfile(profileData);
      setLoading(false);
    };

    getProfile();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white/[0.02] border-r border-white/10 p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-500 rounded-lg flex items-center justify-center">
            <Phone size={16} className="text-white" />
          </div>
          <span className="text-lg font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
        </div>

        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 text-green-500 font-bold transition">
            <BarChart3 size={20} /> Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
            <Phone size={20} /> Call Logs
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
            <Calendar size={20} /> Appointments
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
            <Users size={20} /> Leads
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition">
            <Settings size={20} /> AI Settings
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
          >
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Welcome back, {profile?.business_name || user?.email?.split('@')[0]}</h1>
            <p className="text-gray-400">Alex is active and handling your calls.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AI ENGINE ACTIVE
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Calls Handled', value: '124', icon: Phone, color: 'text-blue-500' },
            { label: 'Leads Qualified', value: '42', icon: Users, color: 'text-green-500' },
            { label: 'Appointments Booked', value: '18', icon: Calendar, color: 'text-purple-500' },
            { label: 'Revenue Saved', value: '$9,200', icon: TrendingUp, color: 'text-orange-500' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10"
            >
              <stat.icon className={`${stat.color} mb-4`} size={24} />
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Recent Call Activity</h2>
              <button className="text-sm text-green-500 font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { name: 'John Smith', type: 'Emergency Repair', time: '12 mins ago', status: 'Qualified' },
                { name: 'Sarah Wilson', type: 'Quote Request', time: '45 mins ago', status: 'Booked' },
                { name: 'Mike Johnson', type: 'General Inquiry', time: '2 hours ago', status: 'Handled' },
                { name: 'David Brown', type: 'Emergency Repair', time: '4 hours ago', status: 'Qualified' },
              ].map((call, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-green-500/20 group-hover:text-green-500 transition">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold">{call.name}</h4>
                      <p className="text-sm text-gray-500">{call.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-500 mb-1">
                      <Clock size={12} /> {call.time}
                    </div>
                    <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {call.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30">
            <h2 className="text-xl font-bold mb-4">Alex's Performance</h2>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Alex is currently operating at 98% accuracy. He has saved you approximately 14 hours of phone time this week.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase">Response Time</span>
                  <span className="text-xs font-bold text-green-500">Instant</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase">Lead Quality</span>
                  <span className="text-xs font-bold text-green-500">94%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[94%] h-full bg-green-500"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-green-500 hover:text-white transition shadow-xl shadow-green-500/20">
              Tune AI Voice
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
