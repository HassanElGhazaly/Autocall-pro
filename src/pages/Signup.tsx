import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'motion/react';
import { Mic, Mail, Lock, Building, ArrowRight } from 'lucide-react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            business_name: businessName,
          },
        },
      });

      if (signupError) throw signupError;

      if (data.user) {
        // App.tsx will handle the redirect via onAuthStateChange
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-6 font-sans">
      <Link to="/" className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
          <Mic size={20} className="text-white" />
        </div>
        <span className="text-xl font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
      >
        <h1 className="text-3xl font-black mb-2 text-center">Get Started</h1>
        <p className="text-gray-400 text-center mb-8">Join the contractors winning with AI.</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        <button 
          onClick={handleGoogleLogin}
          className="w-full py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition mb-8"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#030303] px-4 text-gray-500 font-bold tracking-widest">Or with email</span>
          </div>
        </div>

        <form onSubmit={handleEmailSignup} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Business Name</label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition"
                placeholder="e.g. Elite Plumbing"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Business Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition"
                placeholder="name@business.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold transition shadow-xl shadow-green-600/20 flex items-center justify-center gap-2"
          >
            {loading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Already have an account? <Link to="/signup" className="text-white font-bold hover:text-purple-400 transition">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
