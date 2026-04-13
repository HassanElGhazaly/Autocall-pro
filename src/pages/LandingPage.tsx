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
                    <MessageSquare className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">Excellent choice.</h3>
                  <p className="text-gray-400 mb-8">Confirm the phone number you want to activate Text-Back for.</p>
                  
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
                      Confirm & Continue
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
                    <p>We are generating your setup invoice and sending it to your email.</p>
                    <p className="text-white font-medium">Check your inbox to complete the activation.</p>
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
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition">Features</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button>
          <button 
            onClick={handlePricingClick}
            className="bg-green-600/10 text-green-500 border border-green-500/20 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition font-bold"
          >
            Start Free Trial
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
          Instant Lead Recovery for Small Businesses
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600"
        >
          Stop Losing Customers <br className="hidden md:block" /> to Voicemail.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          80% of callers won't leave a message—they just call your competitor. <span className="text-white font-bold">Autocall.pro</span> instantly texts them back, capturing the lead in 5 seconds.
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
            Start Your 7-Day Risk-Free Trial <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="bg-white/5 border border-white/10 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition"
          >
            See How It Works
          </button>
        </motion.div>
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-green-500">Simple Pricing</h2>
          <p className="text-gray-400 mb-16 text-lg">One saved job pays for the entire year.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Starter */}
            <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-start hover:border-white/20 transition">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Starter</span>
              <div className="flex items-baseline gap-1 mb-4 text-4xl font-black">$97<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <p className="text-gray-400 text-sm mb-8">Perfect for solo operators who need to capture every missed call.</p>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> Missed Call Text-Back</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> 1 Local Number included</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> Unlimited Lead Recovery</div>
                <div className="flex items-center gap-3 text-gray-300"><Check size={18} className="text-green-500" /> Real-time Notifications</div>
              </div>
              <button onClick={handlePricingClick} className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-black font-bold transition text-center">Start 7-Day Free Trial</button>
            </div>

            {/* Business */}
            <div className="p-10 rounded-3xl bg-green-600/10 border-2 border-green-500/50 flex flex-col items-start relative overflow-hidden hover:bg-green-600/20 transition">
              <div className="absolute top-4 right-4 bg-green-500 text-[10px] font-black px-3 py-1 rounded-full uppercase text-white">Most Popular</div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Business</span>
              <div className="flex items-baseline gap-1 mb-4 text-5xl font-black">$197<span className="text-sm text-gray-500 font-normal">/mo</span></div>
              <p className="text-green-100 text-sm mb-8">For growing teams looking to dominate their local market.</p>
              <div className="space-y-4 mb-10 flex-1">
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Everything in Starter</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> AI Web Chat Widget</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> SMS Marketing Suite</div>
                <div className="flex items-center gap-3 text-gray-100 font-medium"><Check size={18} className="text-green-400" /> Priority Support</div>
              </div>
              <button onClick={handlePricingClick} className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold transition shadow-xl shadow-green-600/20 text-center">Start 7-Day Free Trial</button>
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
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">The Lead-Capture Guarantee</h3>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            Try Autocall.pro for 7 days. If you don't capture at least <span className="text-green-400 font-bold">3 leads</span> that would have otherwise gone to voicemail, we'll cancel your trial and you won't pay a cent.
          </p>
          <button 
            onClick={handlePricingClick}
            className="bg-white text-black font-black px-12 py-5 rounded-full hover:bg-green-500 hover:text-white transition-all flex items-center gap-2 mx-auto"
          >
            Start Your 7-Day Risk-Free Trial <ArrowRight size={20} />
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
