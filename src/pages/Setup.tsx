import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'motion/react';
import { Mic, Briefcase, Phone, DollarSign, ArrowRight } from 'lucide-react';

export default function Setup() {
  const [services, setServices] = useState('');
  const [phone, setPhone] = useState('');
  const [avgTicket, setAvgTicket] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/signup');
      } else {
        setUser(user);
      }
    };
    checkUser();
  }, [navigate]);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          service_type: services,
          business_phone: phone,
          avg_ticket: parseFloat(avgTicket),
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      navigate('/checkout');
    } catch (err: any) {
      console.error('Setup Error:', err.message);
      alert('Error updating profile: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
          <Mic size={20} className="text-white" />
        </div>
        <span className="text-xl font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
      >
        <h1 className="text-3xl font-black mb-2 text-center">Personalize Alex</h1>
        <p className="text-gray-400 text-center mb-8">Help Alex understand your business.</p>

        <form onSubmit={handleSetup} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">What services do you offer?</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                required
                value={services}
                onChange={(e) => setServices(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-green-500 transition"
                placeholder="e.g. Roofing, HVAC, Plumbing"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Current Business Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-green-500 transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Avg. Ticket Price ($)</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="number" 
                required
                value={avgTicket}
                onChange={(e) => setAvgTicket(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-green-500 transition"
                placeholder="e.g. 500"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-white text-black font-bold transition hover:bg-green-500 hover:text-white flex items-center justify-center gap-2"
          >
            {loading ? 'Saving...' : 'Continue to Checkout'} <ArrowRight size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
