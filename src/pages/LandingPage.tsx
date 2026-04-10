/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mic, 
  Globe, 
  Zap, 
  BarChart3, 
  ChevronRight, 
  Check, 
  TrendingUp,
  X,
  Phone,
  ShieldCheck,
  ArrowRight,
  Play
} from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [calling, setCalling] = useState(false);

  const handleCallMe = async (e: React.FormEvent) => {
    e.preventDefault();
    setCalling(true);
    
    // VAPI CONFIGURATION PLACEHOLDERS
    // const VAPI_API_KEY = 'YOUR_VAPI_API_KEY';
    // const ASSISTANT_ID = 'YOUR_ASSISTANT_ID';
    
    try {
      console.log('Triggering call to:', phoneNumber);
      // Logic to trigger Vapi call would go here
      setTimeout(() => {
        alert('Alex is calling you now! (Vapi integration placeholder triggered)');
        setCalling(false);
      }, 1500);
    } catch (error) {
      console.error('Call failed:', error);
      setCalling(false);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-green-500/30 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
            <Mic size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition">Features</button>
          <button onClick={() => scrollToSection('lsa')} className="hover:text-white transition">LSA Protection</button>
          <button onClick={() => scrollToSection('demo')} className="hover:text-white transition">Live Demo</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button>
          <a href="tel:+16465170133" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition font-bold">
            <Phone size={16} /> +1 (646) 517-0133
          </a>
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
          The 24/7 AI Receptionist for Your Home Service Business
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600"
        >
          Never Miss a <br className="hidden md:block" /> $5,000 Lead Again.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Specifically built for Roofers, Plumbers, and HVAC Contractors. Alex answers your calls instantly, qualifies every lead, and books jobs directly into your calendar while you're in the field.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('demo')}
            className="bg-green-600 text-white font-bold px-10 py-4 rounded-full transition-all hover:bg-green-500 hover:scale-105 flex items-center gap-2 shadow-xl shadow-green-600/20"
          >
            Get a Call From Alex <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-white/5 border border-white/10 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition"
          >
            View Pricing
          </button>
        </motion.div>
      </section>

      {/* LSA Section */}
      <section id="lsa" className="px-8 py-32 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Stop Wasting Your <br />
              <span className="text-green-500">Google LSA Budget</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Google Local Services Ads (LSA) charge you for <span className="text-white font-bold text-xl">every single lead</span>. When you miss a call, you don't just lose that job—you lose the money you paid for the click.
              </p>
              <p>
                Even worse, Google tracks your response time. Missed calls signal that you're unavailable, causing your <span className="text-white font-bold">ranking to drop</span> and your competitors to take your spot at the top.
              </p>
              <p className="bg-green-500/10 border-l-4 border-green-500 p-6 text-white font-medium italic">
                "Alex ensures every call is answered instantly, 24/7, keeping your ranking high and your calendar full."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-green-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#080808] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">LSA Performance</p>
                    <p className="text-xl font-bold">Top Provider Status</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-black text-2xl">100%</p>
                  <p className="text-[10px] text-gray-500 uppercase">Response Rate</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Ad Ranking', value: '#1 in Your Area', color: 'bg-green-500' },
                  { label: 'Lead Quality', value: 'High Intent Only', color: 'bg-blue-500' },
                  { label: 'ROI', value: '4.2x Increase', color: 'bg-green-500' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-gray-400">{stat.label}</span>
                      <span className="text-sm font-bold text-white">{stat.value}</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${stat.color} w-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vapi Demo Section */}
      <section id="demo" className="px-8 py-32 bg-green-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            Experience the Future: <br />
            <span className="text-green-500 italic">Get a Call from Alex Right Now</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Enter your number below and Alex will call you in seconds to demonstrate how he handles a typical roofing or plumbing inquiry.
          </p>

          <form onSubmit={handleCallMe} className="relative max-w-md mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 font-bold border-r border-white/10 pr-3">
                  <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5" />
                  <span>+1</span>
                </div>
                <input 
                  type="tel" 
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full bg-[#080808] border border-white/10 rounded-2xl py-5 pl-20 pr-4 focus:outline-none focus:border-green-500 transition text-xl font-bold"
                />
              </div>
              <button 
                type="submit"
                disabled={calling}
                className="bg-white text-black font-black px-8 py-5 rounded-2xl hover:bg-green-500 hover:text-white transition-all shadow-xl shadow-green-600/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {calling ? 'Connecting...' : 'Call Me Now'} <Play size={20} fill="currentColor" />
              </button>
            </div>
          </form>
          <p className="mt-6 text-gray-500 text-sm">
            *Alex will call you once for demonstration purposes. No spam, ever.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-8 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              title: 'Instant Response', 
              desc: 'Alex answers in under 1 second. No more "I\'ll call you back" while your lead calls the next guy on Google.',
              color: 'text-green-500',
              border: 'hover:border-green-500/50'
            },
            { 
              icon: Globe, 
              title: 'US-Based Voice', 
              desc: 'Alex uses high-fidelity neural voices that sound exactly like a professional US-based office manager.',
              color: 'text-blue-500',
              border: 'hover:border-blue-500/50'
            },
            { 
              icon: BarChart3, 
              title: 'Smart Qualification', 
              desc: 'Alex asks the right questions: What\'s the emergency? What\'s your address? Are you the homeowner?',
              color: 'text-green-500',
              border: 'hover:border-green-500/50'
            }
          ].map((feature, i) => (
            <div key={i} className={`p-10 rounded-3xl bg-white/[0.03] border border-white/10 ${feature.border} transition group`}>
              <feature.icon className={`${feature.color} mb-6 group-hover:scale-110 transition-transform`} size={40} />
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
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
              { label: 'HVAC Repair', desc: 'Average Ticket: $500', loss: '$2,500', color: 'bg-red-500/5' },
              { label: 'Roofing Job', desc: 'Average Ticket: $1,500', loss: '$7,500', color: 'bg-red-500/10' },
              { label: 'Remodeling Contract', desc: 'Average Ticket: $5,000+', loss: '$25,000+', color: 'bg-red-500/20' },
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
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-32 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Simple, ROI-Focused Pricing</h2>
          <p className="text-gray-400 mb-16 text-lg">Alex pays for himself with the very first job he saves you.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-start hover:border-white/20 transition">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">The Lead Saver</span>
              <div className="flex items-baseline gap-1 mb-4 text-4xl font-black">$149<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-400 text-sm mb-8">Perfect for solo contractors. Catch every call while you're in the field.</p>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 300 Minutes included</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 1 AI Receptionist</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> SMS Notifications</div>
              </div>
              <button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-black font-bold transition text-center">Get Started</button>
            </div>

            <div className="p-10 rounded-3xl bg-green-600/10 border-2 border-green-500/50 flex flex-col items-start relative overflow-hidden hover:bg-green-600/20 transition">
              <div className="absolute top-4 right-4 bg-green-500 text-[10px] font-black px-3 py-1 rounded-full uppercase text-white">Best Value</div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">The Business Scaler</span>
              <div className="flex items-baseline gap-1 mb-4 text-5xl font-black">$499<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <p className="text-green-100 text-sm mb-8">For growing teams. Fully integrated with your CRM and Calendar.</p>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> 1500 Minutes included</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Unlimited Receptionists</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> CRM & Calendar Sync</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Priority Emergency Routing</div>
              </div>
              <button onClick={() => scrollToSection('demo')} className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold transition shadow-xl shadow-green-600/20 text-center">Go Pro Now</button>
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
                  { feature: 'Availability', alex: '24/7', human: '9-5 only' },
                  { feature: 'Monthly Cost', alex: '$499/mo', human: '$3,000+/mo' },
                  { feature: 'Accuracy', alex: '100% Data Sync', human: 'Manual Entry' },
                  { feature: 'Sick Days', alex: 'Zero', human: '15+ days' },
                  { feature: 'CRM Integration', alex: 'Instant', human: 'Slow' },
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

      {/* Final Guarantee */}
      <section className="px-8 py-32">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30 rounded-3xl p-12 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">The 5-Job Guarantee</h3>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            If Alex doesn't save you at least <span className="text-green-400 font-bold">5 jobs</span> in your first 30 days, we'll refund every penny. <span className="underline decoration-green-500 underline-offset-4">No questions asked.</span>
          </p>
          <button 
            onClick={() => scrollToSection('demo')}
            className="bg-white text-black font-black px-12 py-5 rounded-full hover:bg-green-500 hover:text-white transition-all flex items-center gap-2 mx-auto"
          >
            Start Your Risk-Free Trial <ArrowRight size={20} />
          </button>
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
        <p>© 2026 AutoCall Pro. Built for the future of home services.</p>
      </footer>
    </div>
  );
}
