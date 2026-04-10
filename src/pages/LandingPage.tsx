/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Mic, 
  Globe, 
  Zap, 
  BarChart3, 
  ChevronRight, 
  Check, 
  UserPlus, 
  Database, 
  TrendingUp,
  X,
  Minus,
  Phone
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
            <Mic size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <button onClick={scrollToHowItWorks} className="hover:text-white transition">How it Works</button>
          <button onClick={scrollToPricing} className="hover:text-white transition">Pricing</button>
          <a href="tel:+16465170133" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition font-bold">
            <Phone size={16} /> +1 (646) 517-0133
          </a>
          <Link to="/login" className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/5 transition text-white">
            Contractor Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-32 pb-20 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          AI Front-Desk for Contractors
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600"
        >
          Alex Picks Up While <br className="hidden md:block" /> You're On The Job.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The AI Receptionist for Contractors. Alex answers calls, qualifies leads, and books your calendar 24/7. Never miss a lead again.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link to="/signup" className="bg-white text-black font-bold px-10 py-4 rounded-full transition-all hover:bg-green-500 hover:text-white hover:scale-105 flex items-center gap-2">
            Get Started Now <ChevronRight size={18} />
          </Link>
          <button className="bg-white/5 border border-white/10 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition">
            Watch Demo
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative border border-white/10 rounded-3xl bg-[#080808] aspect-[16/9] flex flex-col items-center justify-center overflow-hidden shadow-2xl text-center p-8">
            <div className="flex gap-2 items-center mb-4">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-green-500 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 60 + 20}px`, 
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <span className="text-gray-500 font-mono text-xs tracking-[0.3em] uppercase">Alex Engine Active</span>
          </div>
        </motion.div>
      </section>

      {/* Live Demo Section */}
      <section className="px-8 py-20 bg-green-600/5 border-y border-green-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Talk to Alex Live</h2>
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href="tel:+16465170133" 
              className="group relative flex items-center gap-4 px-8 py-6 bg-white text-black rounded-3xl hover:scale-105 transition-transform shadow-2xl shadow-green-500/20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <Phone size={24} className="animate-pulse" />
                </div>
              </div>
              <span className="text-3xl md:text-5xl font-black tracking-tighter">+1 (646) 517-0133</span>
            </a>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Call Alex right now. Experience how he handles an inquiry, qualifies the lead, and represents your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-32 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-green-500/50 transition group">
            <Zap className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-2xl font-bold mb-4">24/7 Availability</h3>
            <p className="text-gray-400">Alex answers every call, even at 3 AM or when you're on a roof. Never let a job go to a competitor.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition group">
            <Globe className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-2xl font-bold mb-4">Local Accents</h3>
            <p className="text-gray-400">Alex speaks with a natural, local accent that builds trust with your US-based customers instantly.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-green-500/50 transition group">
            <BarChart3 className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-2xl font-bold mb-4">Lead Qualification</h3>
            <p className="text-gray-400">Alex filters out tire-kickers and identifies high-value emergency jobs before they hit your phone.</p>
          </div>
        </div>
      </section>

      {/* Opportunity Cost Section */}
      <section className="px-8 py-32 bg-red-950/20 border-y border-red-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-red-500 uppercase">The Cost of Silence</h2>
            <p className="text-gray-400 text-lg">Missed calls aren't just annoying—they're expensive. Here's the math on what you're leaving on the table every month.</p>
          </div>

          <div className="grid gap-4">
            {[
              { label: 'Small Jobs', desc: 'e.g., HVAC Repair', loss: '$2,500', color: 'bg-red-500/5' },
              { label: 'Medium Projects', desc: 'e.g., Roofing', loss: '$7,500', color: 'bg-red-500/10' },
              { label: 'Big Contracts', desc: 'e.g., Remodeling', loss: '$25,000+', color: 'bg-red-500/20' },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between p-8 rounded-xl border border-red-500/30 ${item.color} backdrop-blur-sm hover:border-red-500 transition-colors group`}>
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h4 className="text-2xl font-black text-white uppercase group-hover:text-red-500 transition-colors">{item.label}</h4>
                  <p className="text-red-200/60 font-medium">{item.desc}</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm uppercase tracking-widest text-red-400 mb-1">5 missed calls =</p>
                  <span className="text-4xl md:text-5xl font-black text-red-500 tabular-nums">{item.loss} <span className="text-xl text-red-400/50">lost/mo</span></span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl font-black text-white leading-tight italic">
              "Whether you're losing $2k or $20k, <br className="hidden md:block" /> 
              Alex stops the bleeding for a fraction of the cost."
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-8 py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">How it Works</h2>
            <p className="text-gray-400 text-lg">Three simple steps to automate your outbound.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-green-600/20 border border-green-500/30 flex items-center justify-center mb-6 shadow-lg shadow-green-500/10">
                <UserPlus className="text-green-500" size={32} />
              </div>
              <div className="bg-[#030303] px-4">
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2 block">Step 1</span>
                <h3 className="text-2xl font-bold mb-4">Connect your line</h3>
                <p className="text-gray-400">Forward your business number to Alex. Setup takes less than 5 minutes.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10">
                <Database className="text-blue-500" size={32} />
              </div>
              <div className="bg-[#030303] px-4">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 block">Step 2</span>
                <h3 className="text-2xl font-bold mb-4">Alex Qualifies</h3>
                <p className="text-gray-400">Alex finds out if it's an emergency, a quote request, or a booking inquiry.</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-green-600/20 border border-green-500/30 flex items-center justify-center mb-6 shadow-lg shadow-green-500/10">
                <TrendingUp className="text-green-500" size={32} />
              </div>
              <div className="bg-[#030303] px-4">
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2 block">Step 3</span>
                <h3 className="text-2xl font-bold mb-4">Job Added</h3>
                <p className="text-gray-400">The job is added to your calendar or CRM, and you get a text notification immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30 rounded-3xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">The 5-Job Guarantee</h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            If Alex doesn't save you at least <span className="text-green-400 font-bold">5 jobs</span> in your first 30 days, we'll refund every penny. <span className="underline decoration-green-500 underline-offset-4">No questions asked.</span>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-32 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Simple Pricing</h2>
          <p className="text-gray-400 mb-16 text-lg">Scale your outbound with a plan that fits.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Solo Contractor Plan */}
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-start hover:border-white/20 transition">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">The Lead Saver</span>
              <div className="flex items-baseline gap-1 mb-4 text-4xl font-black">$149<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-400 text-sm mb-8">Catch every call while you're in the field. Never let a $500 job go to voicemail again.</p>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 300 Minutes included</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 1 AI Receptionist</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> SMS Notifications</div>
              </div>
              <Link to="/signup" className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-black font-bold transition text-center">Get Started</Link>
            </div>

            {/* Service Team Plan */}
            <div className="p-10 rounded-3xl bg-green-600/10 border-2 border-green-500/50 flex flex-col items-start relative overflow-hidden hover:bg-green-600/20 transition">
              <div className="absolute top-4 right-4 bg-green-500 text-[10px] font-black px-3 py-1 rounded-full uppercase text-white">Best Value</div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">The Business Scaler</span>
              <div className="flex items-baseline gap-1 mb-4 text-5xl font-black">$499<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <p className="text-green-100 text-sm mb-8">Your 24/7 AI Sales Team. Fully integrated with your CRM and Calendar. Replaces a $3k/mo human receptionist.</p>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> 1500 Minutes included</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Unlimited Receptionists</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> CRM & Calendar Sync</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Priority Emergency Routing</div>
              </div>
              <Link to="/signup" className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold transition shadow-xl shadow-green-600/20 text-center">Go Pro Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-8 py-32 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Alex vs. A Human Receptionist</h2>
            <p className="text-gray-400 text-lg">The numbers don't lie. Automation wins every time.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-gray-500">Feature</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-green-400">Alex (AI)</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-gray-500">Human</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: 'Availability', alex: '24/7', human: '9-5 only', alexCheck: true, humanCheck: false },
                  { feature: 'Monthly Cost', alex: '$499/mo', human: '$3,000+/mo', alexCheck: true, humanCheck: false },
                  { feature: 'Accuracy', alex: '100% Data Sync', human: 'Manual Entry', alexCheck: true, humanCheck: false },
                  { feature: 'Sick Days', alex: 'Zero', human: '15+ days', alexCheck: true, humanCheck: false },
                  { feature: 'CRM Integration', alex: 'Instant', human: 'Slow', alexCheck: true, humanCheck: false },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-medium text-gray-300">{row.feature}</td>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check size={14} className="text-green-500" />
                        </div>
                        <span className="font-bold text-white">{row.alex}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X size={14} className="text-red-500" />
                        </div>
                        <span className="text-gray-500">{row.human}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 border-t border-white/10 text-center text-gray-600 text-sm">
        <div className="mb-6 flex flex-col items-center gap-4">
          <a href="tel:+16465170133" className="text-xl font-bold text-white hover:text-green-400 transition flex items-center gap-2">
            <Phone size={20} className="text-green-500" /> +1 (646) 517-0133
          </a>
          <p className="max-w-md mx-auto">The AI Front-Desk for Contractors. Available 24/7 to save your leads.</p>
        </div>
        <p>© 2026 AutoCall.pro. Built for the future of voice.</p>
      </footer>
    </div>
  );
}
