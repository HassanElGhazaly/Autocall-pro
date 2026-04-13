/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MessageSquare, 
  PhoneMissed, 
  Zap, 
  BarChart3, 
  ChevronRight, 
  Check, 
  TrendingUp,
  X,
  Phone,
  ShieldCheck,
  ArrowRight,
  Clock,
  DollarSign,
  CheckCircle2,
  Smartphone,
  MousePointer2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LandingPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [confirmPhone, setConfirmPhone] = useState('');

  // ROI Calculator State
  const [missedCalls, setMissedCalls] = useState(5);
  const [customerValue, setCustomerValue] = useState(500);

  const annualLostRevenue = missedCalls * customerValue * 20 * 12; // Assuming 20 working days per month

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate SMS trigger
    setTimeout(() => {
      alert(`Demo triggered! In a real scenario, we would have just sent a text to ${phoneNumber}.`);
      setIsSubmitting(false);
      setPhoneNumber('');
    }, 1500);
  };

  const handlePricingClick = () => {
    setShowPricingModal(true);
    setModalStep(1);
    setConfirmPhone('');
  };

  const handleConfirmPhone = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep(2);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-green-500/30 font-sans overflow-x-hidden">
      {/* Pricing Modal */}
      <AnimatePresence>
        {showPricingModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPricingModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#080808] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowPricingModal(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition"
              >
                <X size={24} />
              </button>

              {modalStep === 1 ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">Secure Your Strategy Call</h3>
                  <p className="text-gray-400 mb-8">Confirm your phone number to book your 15-min strategy session and missed-call audit.</p>
                  
                  <form onSubmit={handleConfirmPhone} className="space-y-4">
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input 
                        type="tel" 
                        required
                        autoFocus
                        value={confirmPhone}
                        onChange={(e) => setConfirmPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-green-500 transition font-bold"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black transition shadow-xl shadow-green-600/20"
                    >
                      Book My Call Now
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20"
                  >
                    <CheckCircle2 className="text-white" size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-black mb-4">Request received!</h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                    <p>We are preparing your custom Missed-Call Audit report.</p>
                    <p className="text-white font-medium">Check your inbox for the booking link to finalize your strategy call.</p>
                  </div>
                  <button 
                    onClick={() => setShowPricingModal(false)}
                    className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition"
                  >
                    Got it, thanks!
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
            <MessageSquare size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">AutoCall<span className="text-green-500">.pro</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition">How It Works</button>
          <button onClick={() => scrollToSection('calculator')} className="hover:text-white transition">ROI Calculator</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition">Features</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button>
          <button 
            onClick={handlePricingClick}
            className="bg-green-600/10 text-green-500 border border-green-500/20 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition font-bold"
          >
            Book Strategy Call
          </button>
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
          Recover $10,000+ in Monthly Lost Revenue
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600"
        >
          Stop Burning Cash <br className="hidden md:block" /> on Missed Calls.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Every missed call is a competitor's gain. We don't just text them back—we <span className="text-white font-bold">qualify and book them</span> for you. Turn your voicemail graveyard into a high-ROI sales machine.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <button 
            onClick={handlePricingClick}
            className="bg-green-600 text-white font-bold px-10 py-4 rounded-full transition-all hover:bg-green-500 hover:scale-105 flex items-center gap-2 shadow-xl shadow-green-600/20"
          >
            Get My Free Missed-Call Audit <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('calculator')}
            className="bg-white/5 border border-white/10 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition"
          >
            Calculate My Lost ROI
          </button>
        </motion.div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="px-8 py-32 bg-green-600/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">The Cost of Doing Nothing</h2>
            <p className="text-gray-400 text-lg">See exactly how much revenue you're losing to your competitors every year.</p>
          </div>

          <div className="bg-[#080808] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Daily Missed Calls</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between mt-2 text-xl font-black text-white">
                    <span>{missedCalls}</span>
                    <span className="text-gray-500 text-sm font-medium">Calls / Day</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Avg. Customer Value ($)</label>
                  <input 
                    type="number" 
                    value={customerValue}
                    onChange={(e) => setCustomerValue(parseInt(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-green-500 transition text-2xl font-black"
                  />
                </div>
              </div>

              <div className="text-center md:text-right p-8 bg-red-500/10 border border-red-500/20 rounded-2xl">
                <p className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2">Annual Lost Revenue</p>
                <p className="text-5xl md:text-7xl font-black text-red-500 tabular-nums">
                  ${annualLostRevenue.toLocaleString()}
                </p>
                <p className="text-gray-500 mt-4 text-sm italic">*Based on 20 working days per month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Visual Mockup */}
      <section id="how-it-works" className="px-8 py-32 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              From <span className="text-red-500">Missed Call</span> to <span className="text-green-500">Booked Client</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              We automate the "First Contact" so you never lose a lead because you were busy working.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-10 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="relative w-[300px] h-[600px] bg-[#0a0a0a] border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden">
                {/* Screen Content */}
                <div className="p-6 pt-12 space-y-6">
                  {/* Missed Call Notification */}
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <PhoneMissed size={16} className="text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-400">PHONE</span>
                      <span className="text-[10px] text-gray-500 ml-auto">JUST NOW</span>
                    </div>
                    <p className="text-sm font-bold">Missed Call</p>
                    <p className="text-xs text-gray-400">(555) 123-4567</p>
                  </motion.div>

                  {/* SMS Bubble 1 (Auto-Reply) */}
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="bg-green-600 rounded-2xl rounded-tr-none p-4 ml-8 shadow-lg shadow-green-600/20"
                  >
                    <p className="text-sm font-medium">Hi! Sorry we missed your call. How can we help you today? 🛠️</p>
                    <span className="text-[10px] text-green-200 block mt-1 text-right">5s ago</span>
                  </motion.div>

                  {/* SMS Bubble 2 (Customer Reply) */}
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="bg-white/10 rounded-2xl rounded-tl-none p-4 mr-8 border border-white/10"
                  >
                    <p className="text-sm font-medium">Hey! I need a quote for a leaky pipe. Can you come today?</p>
                    <span className="text-[10px] text-gray-500 block mt-1">1m ago</span>
                  </motion.div>

                  {/* SMS Bubble 3 (Booking Link) */}
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 3.5 }}
                    className="bg-green-600 rounded-2xl rounded-tr-none p-4 ml-8 shadow-lg shadow-green-600/20"
                  >
                    <p className="text-sm font-medium">Absolutely! You can book a slot here: <span className="underline">autocall.pro/book</span></p>
                    <span className="text-[10px] text-green-200 block mt-1 text-right">Just now</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Steps Description */}
            <div className="space-y-12">
              {[
                { 
                  step: '01', 
                  title: 'The Missed Call', 
                  desc: 'You\'re on a job or at dinner. A new lead calls. You can\'t answer.',
                  icon: PhoneMissed,
                  color: 'text-red-500'
                },
                { 
                  step: '02', 
                  title: 'The 5-Second Text', 
                  desc: 'Autocall.pro detects the missed call and instantly sends a professional text back.',
                  icon: Zap,
                  color: 'text-green-500'
                },
                { 
                  step: '03', 
                  title: 'The Lead Captured', 
                  desc: 'The customer replies to the text instead of calling your competitor. Lead saved.',
                  icon: MessageSquare,
                  color: 'text-blue-500'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-black text-gray-500 group-hover:border-green-500/50 transition">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className={item.color} size={20} />
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Revenue Protection</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Everything you need to stop the bleeding and start growing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: 'Instant Lead Recovery', 
                desc: 'Speed to lead is everything. We respond in 5 seconds, while the customer is still holding their phone.',
                color: 'text-green-500'
              },
              { 
                icon: ShieldCheck, 
                title: 'Revenue Protection', 
                desc: 'Every missed call is a $500 - $5,000 opportunity. We ensure those opportunities don\'t go to waste.',
                color: 'text-blue-500'
              },
              { 
                icon: BarChart3, 
                title: 'Performance Tracking', 
                desc: 'See exactly how many leads were saved and how much revenue was recovered in your dashboard.',
                color: 'text-green-500'
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-green-500/50 transition group">
                <feature.icon className={`${feature.color} mb-6 group-hover:scale-110 transition-transform`} size={40} />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-32 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-green-500">Elite Setup</h2>
          <p className="text-gray-400 mb-16 text-lg">The complete revenue recovery system for high-growth businesses.</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="p-10 rounded-3xl bg-green-600/10 border-2 border-green-500/50 flex flex-col items-start relative overflow-hidden hover:bg-green-600/20 transition">
              <div className="absolute top-4 right-4 bg-green-500 text-[10px] font-black px-3 py-1 rounded-full uppercase text-white">Full Service</div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Elite Setup Plan</span>
              <div className="flex flex-col mb-8">
                <div className="flex items-baseline gap-2 text-5xl font-black">$497<span className="text-sm text-gray-500 font-normal uppercase tracking-widest">One-time Setup</span></div>
                <div className="flex items-baseline gap-1 text-2xl font-black text-white/60">+$97<span className="text-sm text-gray-500 font-normal">/mo maintenance</span></div>
              </div>
              
              <p className="text-green-100 text-sm mb-8">We build, deploy, and manage your entire lead recovery infrastructure.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Instant SMS Back</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> AI Lead Qualification</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> CRM Integration</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Custom Dashboard</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> 24/7 Support</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> 1 Local Number</div>
              </div>
              
              <button onClick={handlePricingClick} className="w-full py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black transition shadow-xl shadow-green-600/20 text-center text-lg">
                Book My Setup Call Now
              </button>
              
              <p className="w-full text-center mt-6 text-xs text-gray-500 font-medium">Limited to 5 new clients per month to ensure quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-32">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30 rounded-3xl p-12 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">No-Risk Guarantee</h3>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            If we don't recover <span className="text-green-400 font-bold">5+ leads</span> in your first 14 days, you get a <span className="text-white font-bold">100% refund</span> on the setup fee. No questions asked.
          </p>
          <button 
            onClick={handlePricingClick}
            className="bg-white text-black font-black px-12 py-5 rounded-full hover:bg-green-500 hover:text-white transition-all flex items-center gap-2 mx-auto"
          >
            Get My Free Missed-Call Audit <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 border-t border-white/10 text-center text-gray-600 text-sm">
        <div className="mb-6 flex flex-col items-center gap-4">
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquare size={20} className="text-green-500" /> AutoCall.pro
          </span>
          <p className="max-w-md mx-auto">Instant Missed Call Text-Back for Small Businesses. Never lose a lead to voicemail again.</p>
        </div>
        <p>© 2026 AutoCall Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
