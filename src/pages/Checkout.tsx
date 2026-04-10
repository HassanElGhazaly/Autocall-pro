import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'motion/react';
import { Mic, Check, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

const stripePromise = loadStripe((import.meta as any).env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

export default function Checkout() {
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

  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          userId: user.id,
          email: user.email,
        }),
      });

      const session = await response.json();
      if (session.error) throw new Error(session.error);

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await (stripe as any).redirectToCheckout({
          sessionId: session.id,
        });
        if (error) throw error;
      }
    } catch (err: any) {
      console.error('Checkout Error:', err.message);
      alert('Checkout failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center py-20 px-6 font-sans">
      <div className="flex items-center gap-2 mb-16">
        <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
          <Mic size={20} className="text-white" />
        </div>
        <span className="text-xl font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
      </div>

      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Choose Your Plan</h1>
        <p className="text-gray-400 text-lg">Invest in your business growth. Alex starts working the moment you subscribe.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Lead Saver Plan */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-start hover:border-white/20 transition"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">The Lead Saver</span>
          <div className="flex items-baseline gap-1 mb-4 text-4xl font-black">$149<span className="text-sm text-gray-500 font-normal">/mo</span></div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">Catch every call while you're in the field. Never let a $500 job go to voicemail again.</p>
          <div className="space-y-4 mb-10 flex-1">
            <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 300 Minutes included</div>
            <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 1 AI Receptionist</div>
            <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> SMS Notifications</div>
          </div>
          <button 
            onClick={() => handleCheckout('price_lead_saver_placeholder')}
            disabled={loading}
            className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-black font-bold transition text-center"
          >
            {loading ? 'Processing...' : 'Get Started'}
          </button>
        </motion.div>

        {/* Business Scaler Plan */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-10 rounded-3xl bg-green-600/10 border-2 border-green-500/50 flex flex-col items-start relative overflow-hidden hover:bg-green-600/20 transition"
        >
          <div className="absolute top-4 right-4 bg-green-500 text-[10px] font-black px-3 py-1 rounded-full uppercase text-white">Best Value</div>
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">The Business Scaler</span>
          <div className="flex items-baseline gap-1 mb-4 text-5xl font-black">$499<span className="text-sm text-gray-500 font-normal">/mo</span></div>
          <p className="text-green-100 text-sm mb-8 leading-relaxed">Your 24/7 AI Sales Team. Fully integrated with your CRM and Calendar. Replaces a $3k/mo human receptionist.</p>
          <div className="space-y-4 mb-10 flex-1">
            <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> 1500 Minutes included</div>
            <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Unlimited Receptionists</div>
            <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> CRM & Calendar Sync</div>
            <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Priority Emergency Routing</div>
          </div>
          <button 
            onClick={() => handleCheckout('price_business_scaler_placeholder')}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold transition shadow-xl shadow-green-600/20 text-center"
          >
            {loading ? 'Processing...' : 'Go Pro Now'}
          </button>
        </motion.div>
      </div>

      {/* Guarantee Badge */}
      <div className="mt-20 flex flex-col items-center gap-4 bg-white/[0.02] border border-white/10 p-8 rounded-3xl max-w-xl text-center">
        <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center text-green-500 mb-2">
          <ShieldCheck size={32} />
        </div>
        <h3 className="text-xl font-bold">The 5-Job Guarantee</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          If Alex doesn't save you at least 5 jobs in your first 30 days, we'll refund every penny. No questions asked.
        </p>
      </div>
    </div>
  );
}
