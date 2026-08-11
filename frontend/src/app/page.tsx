'use client';

import Link from 'next/link';
import { Activity, ShieldCheck, Stethoscope, Users, Pill, FlaskConical, Calendar, ArrowRight, Sparkles, Building2, UserCheck, PhoneCall, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [activeRoleTab, setActiveRoleTab] = useState<'PATIENT' | 'DOCTOR' | 'NURSE' | 'RECEPTION' | 'PHARMACY' | 'LAB' | 'ADMIN'>('PATIENT');

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Medi<span className="text-sky-400">Core</span>
              </span>
              <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                ENTERPRISE
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#overview" className="hover:text-sky-400 transition">Hospital System</a>
            <a href="#patient-portal" className="hover:text-sky-400 transition">Patient Portal</a>
            <a href="#roles" className="hover:text-sky-400 transition">Role Portals</a>
            <a href="#ai" className="hover:text-sky-400 transition">MediCore AI</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 shadow-md shadow-sky-500/20 hover:opacity-95 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>Next-Gen Unified Hospital & Healthcare Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            One Hospital. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
              One Intelligent Healthcare Platform.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            MediCore unifies hospital operations, clinical EMR, OPD/IPD queue management, pharmacy inventory, lab automation, and patient digital health into one secure ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/signup"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-sky-500/25 hover:scale-[1.02] transition"
            >
              Access Patient Portal
            </Link>
            <Link
              href="#roles"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm transition"
            >
              Explore Staff Dashboards
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-white">8 User Roles</div>
              <div className="text-xs text-slate-400 mt-0.5">Strict RBAC Authorization</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-sky-400">FastAPI + PostgreSQL</div>
              <div className="text-xs text-slate-400 mt-0.5">Enterprise Backend API</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-teal-300">0% Fake Data</div>
              <div className="text-xs text-slate-400 mt-0.5">100% DB-Backed Telemetry</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400">MediCore AI</div>
              <div className="text-xs text-slate-400 mt-0.5">Context-Aware Insights</div>
            </div>
          </div>

        </div>
      </section>

      {/* ROLE PORTAL EXPLORER */}
      <section id="roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">Multi-Role Architecture</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Dedicated Workspaces for Every Role</p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 max-w-3xl mx-auto">
          {(['PATIENT', 'DOCTOR', 'NURSE', 'RECEPTION', 'PHARMACY', 'LAB', 'ADMIN'] as const).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRoleTab(role)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition ${
                activeRoleTab === role
                  ? 'bg-sky-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Role Feature Showcase Panel */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{activeRoleTab} Portal Capabilities</h3>
              <p className="text-xs text-slate-400">Strict backend permission enforcement & customized clinical interface</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-sky-400">✓ Workflows & Actions</div>
              <p className="text-xs text-slate-300">
                {activeRoleTab === 'PATIENT' && 'Book appointments, view prescriptions, order medicines, access lab reports & talk to MediCore AI.'}
                {activeRoleTab === 'DOCTOR' && 'Access patient health timelines, write clinical notes, issue RX-2026 prescriptions & order lab tests.'}
                {activeRoleTab === 'NURSE' && 'Record patient vitals, monitor ward bed statuses, manage daily medication schedules.'}
                {activeRoleTab === 'RECEPTION' && 'Check-in arriving patients, issue queue tokens (A-101), manage OPD doctor slots.'}
                {activeRoleTab === 'PHARMACY' && 'Verify doctor digital prescriptions, manage medicine batch inventory, track expiry dates.'}
                {activeRoleTab === 'LAB' && 'Process sample collections, input lab test values, set critical reference flags (HIGH/CRITICAL).'}
                {activeRoleTab === 'ADMIN' && 'View hospital revenue analytics, ward bed occupancy, department load & infection surveillance.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-teal-300">✓ Security & RBAC</div>
              <p className="text-xs text-slate-300">
                FastAPI JWT role checks guarantee that users cannot access unauthorized medical endpoints or cross-patient records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© 2026 MediCore Healthcare Platform. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/docs" className="hover:text-slate-400">FastAPI Swagger API Docs</a>
            <a href="#privacy" className="hover:text-slate-400">Privacy & HIPAA Security</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
