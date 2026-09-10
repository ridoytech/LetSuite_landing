'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Building, Users, MessageSquare, Calendar, CreditCard, 
  Wrench, FileText, Smartphone, ShieldCheck, ChevronRight, Menu, X, 
  ArrowUpRight, Phone, Mail, MapPin, Zap, Lock, Globe, BarChart3, Download,
  Home, Grid, User
} from 'lucide-react';

const stats = [
  { label: 'Total Features', end: 120, suffix: '+' },
  { label: 'Modules', end: 11, suffix: '' },
  { label: 'User Portals', end: 5, suffix: '' },
  { label: 'Mobile App', end: 1, suffix: '' },
  { label: 'AI Features', end: 12, suffix: '' },
];

function AnimatedCounter({ end, suffix = '' }) {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const portals = [
  { title: 'Admin Panel', desc: 'Full control over the system, manage all users, control permissions, view all data & reports.', icon: ShieldCheck },
  { title: 'Staff Panel', desc: 'Manage assigned tasks, leads, viewings, properties, documents, and contractor jobs.', icon: Users },
  { title: 'Landlord Panel', desc: 'View properties, financial statements, confirm payments, and track maintenance.', icon: Building },
  { title: 'Tenant Panel', desc: 'Pay rent, submit maintenance requests, view documents, and track deposits.', icon: Smartphone },
  { title: 'Contractor Panel', desc: 'Accept or reject jobs, submit invoices, view job details, and upload completion photos.', icon: Wrench },
];

const modules = [
  { name: 'Property Management', icon: Building, desc: 'Add properties, HMO management, EPC, maps, and void tracking.' },
  { name: 'AI Chatbot', icon: MessageSquare, desc: 'Property discovery, natural language search, auto-booking viewings.' },
  { name: 'Viewings & Tenants', icon: Calendar, desc: 'Viewing calendars, online applications, applicant comparison.' },
  { name: 'Tenant Referencing', icon: ShieldCheck, desc: 'Income verification, right to rent checks, affordability calculator.' },
  { name: 'Rent & Payments', icon: CreditCard, desc: 'Rent schedules, online payments, arrears tracker, statements.' },
  { name: 'Maintenance', icon: Wrench, desc: 'Tenant requests, contractor assignment, invoicing, planned jobs.' },
  { name: 'Compliance', icon: FileText, desc: 'Gas safety, EPC tracking, EICR, deposit protection tracking.' },
  { name: 'Mobile App', icon: Smartphone, desc: 'Native app for all users with offline mode and push notifications.' },
];

const steps = [
  { step: '1', title: 'Landlord Onboarding', desc: 'Landlord registers, uploads required documents via checklist, and agency verifies them.' },
  { step: '2', title: 'Property Marketing', desc: 'Agency adds properties. Tenants discover them via website or 24/7 AI Chatbot.' },
  { step: '3', title: 'Viewings & Referencing', desc: 'Book viewings, collect tenant applications, run reference and income checks securely.' },
  { step: '4', title: 'Tenancy & Move-in', desc: 'Generate agreements (AST), collect deposits, track move-in meter readings.' },
  { step: '5', title: 'Ongoing Management', desc: 'Automated rent collection, maintenance request handling via contractor portal.' },
];

const blogs = [
  { title: "Navigating the Renters (Reform) Bill", date: "Oct 12, 2026", category: "Compliance", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80" },
  { title: "How AI is Transforming Lettings", date: "Sep 28, 2026", category: "Technology", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
  { title: "5 Tips for Faster Tenant Referencing", date: "Sep 15, 2026", category: "Best Practices", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" }
];

const advantages = [
  { icon: Zap, title: "Automated Workflows", desc: "Trigger automatic emails, contract generation, and compliance reminders without lifting a finger." },
  { icon: Lock, title: "Bank-Level Security", desc: "All tenant and landlord data is encrypted and stored securely, ensuring full GDPR compliance." },
  { icon: Globe, title: "Cloud-Based Access", desc: "Access your dashboard from any browser or device, 24/7. No local installation required." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Track voids, revenue, maintenance costs, and staff performance through custom visual reports." }
];

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 overflow-x-hidden pb-24 lg:pb-0">
      
      {/* Floating Glass Navbar */}
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="bg-white/90 md:bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgb(0,0,0,0.08)] rounded-full px-5 md:px-6 py-3 flex items-center justify-between w-full max-w-6xl relative z-50">
          <div className="flex items-center gap-2 -my-4">
            <img src="/Let Suite-Photoroom.png" alt="Let Suite" className="h-12 md:h-16 w-auto object-contain origin-left scale-110" />
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">Home</a>
            <a href="#about" className="text-slate-600 hover:text-primary font-medium transition">Why Us</a>
            <a href="#features" className="text-slate-600 hover:text-primary font-medium transition">Features</a>
            <a href="#app" className="text-slate-600 hover:text-primary font-medium transition">App</a>
            <a href="#blog" className="text-slate-600 hover:text-primary font-medium transition">Blog</a>
            <a href="#contact" className="text-slate-600 hover:text-primary font-medium transition">Contact</a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-semibold transition flex items-center gap-2 text-sm shadow-md shadow-primary/20">
              Login 
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

      {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-4 z-40 lg:hidden"
            >
              {['Home', 'Why Us', 'Features', 'App', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3"
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary text-white px-5 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 mt-2 shadow-md w-full">
                Login <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Bottom Navigation (App-like) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200/60 z-40 pb-safe pt-1 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16 pb-2">
          <a href="#" className="flex flex-col items-center justify-center w-full text-primary">
            <Home className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">Home</span>
          </a>
          <a href="#features" className="flex flex-col items-center justify-center w-full text-slate-400 hover:text-slate-900 transition-colors">
            <Grid className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">Features</span>
          </a>
          <div className="relative -top-5 w-full flex justify-center">
            <button className="w-14 h-14 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-[#fafafa] text-white transition-transform hover:scale-105 active:scale-95">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
          <a href="#app" className="flex flex-col items-center justify-center w-full text-slate-400 hover:text-slate-900 transition-colors">
            <Smartphone className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">App</span>
          </a>
          <a href="#contact" className="flex flex-col items-center justify-center w-full text-slate-400 hover:text-slate-900 transition-colors">
            <User className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">Contact</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 lg:w-8 lg:h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left mt-10 md:mt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs md:text-sm font-semibold text-primary">The Complete Lettings Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              One platform to manage your <span className="text-primary">entire tenancy process.</span>
            </h1>
            
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
              Don't let admin hold you back. Let Suite provides everything letting agencies, landlords, tenants, and contractors need to rent better—fully automated and hassle-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                Book a Demo <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5" /> Get The App
              </button>
            </div>
            <p className="text-sm text-slate-400 font-medium">No credit card required • Instant access • Full onboarding support</p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#fafafa] bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                <span className="font-bold text-slate-900">Trusted by 1000+</span><br/>agencies across the UK
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[350px] mx-auto"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="relative rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19.5]">
              <img src="/ui-dashboard.jpg" alt="App Dashboard" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute top-20 -left-12 bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-3 border border-slate-200/60 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Rent Collected</p>
                <p className="text-sm font-bold text-slate-900">$24,750</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner - Compact Card */}
      <section className="relative z-20 -mt-12 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl shadow-xl shadow-primary/20 p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x divide-primary-hover/50">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center px-2">
                  <p className="text-4xl font-black text-white mb-1">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="text-primary-light font-bold text-[10px] uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Advantages Grid */}
      <section className="py-32 relative bg-white border-b border-slate-200/60 overflow-hidden" id="about">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
               <span className="text-xs font-bold text-primary uppercase tracking-widest">The Let Suite Advantage</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Built by letting professionals, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2A71AA]">for letting professionals.</span>
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We understand the hurdles you face every day. That's why we built a unified ecosystem to eliminate endless admin, reduce void periods, and ensure 100% compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div key={i} className="group relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  {/* Premium top gradient line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-hover group-hover:text-white transition-all duration-300 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{adv.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 1: Tenancy Progression */}
      <section className="py-24 bg-[#fafafa]" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                 <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1000&auto=format&fit=crop" alt="Dashboard Preview" className="w-full h-auto" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Tenancy Progression</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">From offer to move-in, fully automated.</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Ditch the paperwork. Let Suite handles everything from applicant tracking and deep tenant referencing, all the way to digital contract signing and deposit registration.
                </p>
              </div>
              
              <ul className="space-y-5">
                {[
                  { title: "Automated Referencing", desc: "Open Banking income verification and Right to Rent checks." },
                  { title: "Digital Contract Signing", desc: "Generate ASTs instantly and get them signed digitally via the app." },
                  { title: "Compliance Checklists", desc: "Never miss a Gas Safety, EICR, or EPC certificate expiry." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive 2: App & Maintenance */}
      <section className="py-24 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Property Management</h2>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">Seamless maintenance & financials.</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Keep your landlords happy and properties in top condition. Tenants can report issues via the app, you assign contractors instantly, and track invoices in real-time.
                </p>
              </div>
              
              <ul className="space-y-5">
                {[
                  { title: "Automated Rent Collection", desc: "Track arrears automatically and send push notifications to late payers." },
                  { title: "Contractor Portal", desc: "Contractors can accept jobs, submit quotes, and upload completion photos." },
                  { title: "Live Landlord Statements", desc: "Landlords can view their income, expenses, and yield in real-time." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-8 bg-slate-50 flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Financials" className="rounded-xl shadow-lg w-full h-auto" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated App Access Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="app">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary-light font-bold uppercase tracking-widest mb-4">Direct App Access</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Hassle-free access for everyone.</h3>
              <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
                Your agency, landlords, tenants, and contractors don't need to log into clunky web portals. They can download the Let Suite native app directly and get instant access to their personalized dashboard.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                  <Smartphone className="w-8 h-8 text-primary-light mb-3" />
                  <h4 className="font-bold text-white text-lg mb-1">Push Notifications</h4>
                  <p className="text-sm text-slate-400">Instant alerts for rent due, maintenance updates, and viewing requests.</p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                  <Download className="w-8 h-8 text-primary-light mb-3" />
                  <h4 className="font-bold text-white text-lg mb-1">Available Everywhere</h4>
                  <p className="text-sm text-slate-400">Download directly via iOS App Store, Google Play, or via direct invite link.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store Logo" className="w-7 h-7" />
                  App Store
                </button>
                <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play Logo" className="w-7 h-7" />
                  Google Play
                </button>
              </div>
            </div>
            
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
               <div className="relative rounded-[3rem] border-[8px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden aspect-[9/19.5]">
                 <img src="/mobile-dashboard.jpg" alt="Mobile App" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-32 relative bg-slate-50 overflow-hidden">
        {/* Decorative background glow & pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-primary/10 via-blue-400/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md shadow-slate-200/50 border border-slate-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">The Complete Arsenal</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">11 Core Modules</h3>
            <p className="text-lg text-slate-500 font-medium">
              Everything you need to run a professional letting agency, neatly categorized into an interconnected, powerful ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden hover:border-primary/30">
                  {/* Hover background subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_20px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{mod.name}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{mod.desc}</p>
                    
                    <div className="flex items-center text-primary text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore Module <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Chatbot Highlight - Premium Light */}
      <section className="py-32 bg-white relative overflow-hidden border-y border-slate-200/60" id="ai-chatbot">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-blue-50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <div className="relative mx-auto w-[280px] sm:w-[320px] z-10">
                 {/* Glowing backdrop */}
                 <div className="absolute inset-0 bg-primary rounded-[3rem] blur-2xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
                 
                 {/* Mobile frame */}
                 <div className="relative rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden aspect-[9/19.5]">
                   <img src="/mobile-chatbot.jpg" alt="AI Chatbot Interface" className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-500" />
                   
                   {/* Overlay reflection for glass effect */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
                 </div>
                 
                 {/* Floating badge */}
                 <div className="absolute top-1/3 -right-8 sm:-right-16 bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '5s' }}>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">"Book viewing"</p>
                      <p className="text-slate-500 text-xs">AI responds instantly</p>
                    </div>
                 </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">24/7 Intelligent Agent</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Never miss a lead. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2A71AA]">AI Property Discovery.</span>
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Convert out-of-hours visitors into confirmed leads while you sleep. Our AI chatbot widget is always visible, helping users find properties using natural language and booking viewings instantly into your calendar.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Natural language property search',
                  'Auto-suggests from live database',
                  'Books viewing appointments',
                  'Answers complex FAQs',
                  'Integrates directly to CRM',
                  'Multilingual support'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-white hover:shadow-md transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition shadow-lg shadow-primary/30">
                  Try the AI Chatbot <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals Section - Premium Split Layout */}
      <section className="py-32 bg-slate-50 relative overflow-hidden" id="portals">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid xl:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Targeted Access</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#2A71AA]">5 Dedicated Portals.</span><br />
                  One source of truth.
                </h3>
                <p className="text-lg text-slate-500 font-medium">
                  A bespoke, centralized database connecting all stakeholders. Give landlords, tenants, staff, and contractors exactly the tools and access they need.
                </p>
              </div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/80 bg-white p-3">
                 <div className="rounded-[2rem] overflow-hidden relative group">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Dashboard Data Portals" className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                   <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                     <span className="text-white font-bold text-xl drop-shadow-md">Unified Ecosystem</span>
                     <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-white text-sm font-bold shadow-lg">Real-time Sync</div>
                   </div>
                 </div>
              </div>
            </div>

            <div className="space-y-4">
              {portals.map((portal, idx) => {
                const Icon = portal.icon;
                return (
                  <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex items-start gap-6 cursor-default hover:-translate-x-2">
                    <div className="w-16 h-16 shrink-0 bg-slate-50 border border-slate-100 shadow-inner rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{portal.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-sm">{portal.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Flow - Premium Layout */}
      <section className="py-32 bg-[#0a192f] text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Sticky Left Column with Image */}
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">End-to-End Automation</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Let Suite</span> Works
              </h2>
              
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-md">
                A streamlined, perfectly orchestrated flow from initial property acquisition all the way to ongoing daily management and rent collection.
              </p>

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mt-8">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" alt="Luxury Property Flow" className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="block font-bold text-xl text-white drop-shadow-md">Frictionless Process</span>
                    <span className="block text-sm text-blue-200">100% Digital Workflow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Timeline */}
            <div className="relative border-l-2 border-white/10 pl-8 md:pl-12 space-y-10 py-4 ml-4 md:ml-0">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-4 w-12 h-12 bg-[#0a192f] rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/50 bg-primary/20 flex items-center justify-center text-blue-300 font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(28,85,129,0.3)] group-hover:shadow-[0_0_20px_rgba(28,85,129,0.8)]">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white border-b border-slate-200/60" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Resources</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">Latest Insights & News</h3>
              <p className="text-lg text-slate-500 font-medium">
                Stay updated with the latest in property management, technology, and compliance.
              </p>
            </div>
            <button className="bg-white border border-slate-200 hover:border-primary text-slate-900 px-6 py-3 rounded-full font-semibold transition shadow-sm whitespace-nowrap">
              View All Posts
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                    {blog.category}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-2">{blog.date}</p>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{blog.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#fafafa]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Get in Touch</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Ready to see it in action?</h3>
              <p className="text-lg text-slate-500 font-medium mb-10">
                Whether you have a question about features, pricing, or want a live demo, our expert team is ready to help you transform your agency.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Call us</p>
                    <p className="text-slate-900 font-bold">+44 (0) 20 3000 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Email us</p>
                    <p className="text-slate-900 font-bold">hello@letsuite.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Visit us</p>
                    <p className="text-slate-900 font-bold">123 Property Lane, London, UK</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="john@agency.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact Card */}
      <section className="py-24 bg-white relative z-10" id="cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to Transform Your Agency?</h2>
              <p className="text-lg text-primary-light mb-10 max-w-2xl mx-auto font-medium">
                Join thousands of agencies streamlining their lettings process with Let Suite.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition hover:scale-105 shadow-xl">
                  Get Started Now
                </button>
                <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition hover:scale-105 backdrop-blur-md">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Premium Light */}
      <footer className="relative bg-slate-50 pt-20 pb-10 border-t border-slate-200/60 overflow-hidden">
        {/* Background Depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="inline-flex items-center gap-2 mb-8 bg-white px-6 py-4 rounded-3xl shadow-sm border border-slate-100">
                <img src="/Let Suite-Photoroom.png" alt="Let Suite Logo" className="h-16 md:h-20 w-auto object-contain scale-110 origin-left" />
              </div>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 pr-4">
                The complete feature set for a production-ready lettings management system. Built for agencies, landlords, and tenants.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-extrabold text-slate-900 mb-6 tracking-wide">Solutions</h4>
                <ul className="space-y-4">
                  {['Property Management', 'AI Discovery Chatbot', 'Landlord Portals', 'Tenant Referencing'].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-slate-500 hover:text-primary font-medium transition flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 mb-6 tracking-wide">Company</h4>
                <ul className="space-y-4">
                  {['Why Us', 'Mobile App', 'Blog & News', 'Contact Support'].map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-slate-500 hover:text-primary font-medium transition flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-extrabold text-slate-900 mb-6 tracking-wide">Stay Updated</h4>
                <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex items-center focus-within:border-primary/30 focus-within:shadow-md transition-all">
                  <input type="email" placeholder="Enter your email" className="w-full bg-transparent px-3 py-2 text-sm outline-none text-slate-700 placeholder:text-slate-400" />
                  <button className="bg-primary text-white p-2.5 rounded-xl hover:bg-primary-hover transition shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 font-medium text-sm">© {new Date().getFullYear()} Let Suite. All rights reserved.</p>
            <div className="flex gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
