'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Users, Plus, CheckCircle, Clock, Search, QrCode, UserCheck } from 'lucide-react';

export default function ReceptionistDashboard() {
  const [tokens, setTokens] = useState([
    { token: 'A-101', patient: 'Aarav Sharma', code: 'MED-PAT-100001', doctor: 'Dr. Priya Nair', dept: 'Cardiology', status: 'CHECKED_IN', time: '14:30 PM' },
    { token: 'A-102', patient: 'Meera Patel', code: 'MED-PAT-100002', doctor: 'Dr. Priya Nair', dept: 'Cardiology', status: 'WAITING', time: '15:00 PM' },
    { token: 'A-103', patient: 'Rohan Gupta', code: 'MED-PAT-100003', doctor: 'Dr. Vikram Sethi', dept: 'Orthopedics', status: 'WAITING', time: '15:15 PM' }
  ]);

  const handleCallNext = (tokenNum: string) => {
    setTokens(prev => prev.map(t => t.token === tokenNum ? { ...t, status: 'IN_PROGRESS' } : t));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Activity className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-lg text-white">MediCore <span className="text-sky-400">Front Desk & Queue</span></span>
        </Link>

        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-extrabold text-xs shadow flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> Quick Patient OPD Registration
        </button>
      </header>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Total Check-Ins Today</div>
            <div className="text-2xl font-black text-white mt-1">142 Patients</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Current Queue Position</div>
            <div className="text-2xl font-black text-sky-400 mt-1">Token A-101</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Avg OPD Wait Time</div>
            <div className="text-2xl font-black text-emerald-400 mt-1">12.4 Mins</div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-400" /> OPD Queue Tokens & Check-In Desk
          </h2>

          <div className="space-y-3">
            {tokens.map((t) => (
              <div key={t.token} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-black text-sm flex items-center justify-center">
                    {t.token}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.patient} <span className="text-xs text-slate-400 font-mono">({t.code})</span></div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.doctor} • {t.dept}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    t.status === 'IN_PROGRESS' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-sky-500/10 text-sky-400'
                  }`}>
                    {t.status}
                  </span>
                  <button
                    onClick={() => handleCallNext(t.token)}
                    className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-extrabold transition"
                  >
                    Call Next
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
