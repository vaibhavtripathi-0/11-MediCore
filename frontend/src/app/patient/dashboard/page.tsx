'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Calendar, Clock, FileText, Pill, FlaskConical, Bot, Plus, Bell, User, Sparkles, Navigation } from 'lucide-react';

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'APPOINTMENTS' | 'RECORDS' | 'PHARMACY' | 'LABS'>('OVERVIEW');

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Patient Portal Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Activity className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">MediCore <span className="text-sky-400">Patient</span></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white">
            <Bell className="w-4 h-4" />
            <span className="w-2 h-2 rounded-full bg-sky-400 absolute top-1.5 right-1.5" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
            <User className="w-4 h-4 text-sky-400" />
            <span className="font-bold">Aarav Sharma</span>
            <span className="text-[10px] text-slate-500 font-mono">MED-PAT-100001</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Patient Welcome Banner */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Digital Health Portal Active
            </div>
            <h1 className="text-2xl font-extrabold text-white">Welcome back, Aarav!</h1>
            <p className="text-xs text-slate-400">Blood Group: <span className="text-white font-bold">O+</span> • Primary Care Doctor: <span className="text-sky-400 font-bold">Dr. Priya Nair (Cardiology)</span></p>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-sky-500/20 hover:opacity-95 transition flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Book OPD Slot
            </button>
          </div>
        </div>

        {/* Quick Action Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            onClick={() => setActiveTab('APPOINTMENTS')}
            className={`glass-panel p-5 rounded-2xl border text-left space-y-2 transition ${
              activeTab === 'APPOINTMENTS' ? 'border-sky-500 bg-slate-900' : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <Calendar className="w-6 h-6 text-sky-400" />
            <div className="text-sm font-bold text-white">Appointments</div>
            <div className="text-[11px] text-slate-400">1 Upcoming Slot</div>
          </button>

          <button
            onClick={() => setActiveTab('RECORDS')}
            className={`glass-panel p-5 rounded-2xl border text-left space-y-2 transition ${
              activeTab === 'RECORDS' ? 'border-sky-500 bg-slate-900' : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <FileText className="w-6 h-6 text-teal-400" />
            <div className="text-sm font-bold text-white">Health Records</div>
            <div className="text-[11px] text-slate-400">EMR Timeline</div>
          </button>

          <button
            onClick={() => setActiveTab('PHARMACY')}
            className={`glass-panel p-5 rounded-2xl border text-left space-y-2 transition ${
              activeTab === 'PHARMACY' ? 'border-sky-500 bg-slate-900' : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <Pill className="w-6 h-6 text-emerald-400" />
            <div className="text-sm font-bold text-white">Pharmacy</div>
            <div className="text-[11px] text-slate-400">Active Prescriptions</div>
          </button>

          <button
            onClick={() => setActiveTab('LABS')}
            className={`glass-panel p-5 rounded-2xl border text-left space-y-2 transition ${
              activeTab === 'LABS' ? 'border-sky-500 bg-slate-900' : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <FlaskConical className="w-6 h-6 text-purple-400" />
            <div className="text-sm font-bold text-white">Lab Reports</div>
            <div className="text-[11px] text-slate-400">Diagnostics</div>
          </button>
        </div>

        {/* Dynamic Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Workspace Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Upcoming Appointment Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-400" /> Confirmed Appointment
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
                  TOKEN: A-104
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white">Dr. Priya Nair</div>
                  <div className="text-xs text-sky-400 font-semibold">Cardiology Department • OPD Room 204</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <Clock className="w-3.5 h-3.5" /> Today at 14:30 PM (Est. Wait: 15 Mins)
                  </div>
                </div>

                <div className="text-right">
                  <button className="px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 text-xs font-bold hover:bg-sky-400 transition">
                    View Slip
                  </button>
                </div>
              </div>
            </div>

            {/* Health History Timeline */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-400" /> Patient Medical History Timeline
              </h3>

              <div className="space-y-3 relative pl-4 border-l border-slate-800">
                <div className="relative pl-4 space-y-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 absolute -left-[21px] top-1" />
                  <div className="text-xs font-bold text-sky-400">Aug 2026 — OPD Consultation</div>
                  <div className="text-sm font-bold text-white">Routine Cardiac Checkup & Lipid Profile</div>
                  <p className="text-xs text-slate-400">Prescription RX-2026-0042 issued by Dr. Priya Nair.</p>
                </div>

                <div className="relative pl-4 space-y-1 pt-3 border-t border-slate-800/60">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 absolute -left-[21px] top-4" />
                  <div className="text-xs font-bold text-teal-400">Jul 2026 — Diagnostic Lab Report</div>
                  <div className="text-sm font-bold text-white">Complete Blood Count (CBC) & ECG</div>
                  <p className="text-xs text-slate-400">Results verified by Central Laboratory.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Assistant Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* MediCore AI Assistant Widget */}
            <div className="glass-panel p-6 rounded-3xl border border-sky-500/30 space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">MediCore AI Assistant</h4>
                  <div className="text-[10px] text-sky-400 font-semibold">Authorized Record Context</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
                <p>"Namaste Aarav! Aapka next appointment <strong>Dr. Priya Nair</strong> ke saath aaj 14:30 PM par confirmed hai (Token A-104)."</p>
              </div>

              <input
                type="text"
                placeholder="Ask MediCore AI about your reports..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
