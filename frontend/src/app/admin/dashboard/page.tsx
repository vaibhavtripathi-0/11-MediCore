'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Building2, BedDouble, ShieldAlert, BarChart3, TrendingUp, Users } from 'lucide-react';

export default function AdminDashboard() {
  const [beds, setBeds] = useState([
    { ward: 'ICU Ward 01', bedNo: 'ICU-101', patient: 'Ramesh Verma', status: 'OCCUPIED' },
    { ward: 'ICU Ward 01', bedNo: 'ICU-102', patient: '-', status: 'AVAILABLE' },
    { ward: 'General Ward B', bedNo: 'GEN-204', patient: 'Anita Roy', status: 'OCCUPIED' },
    { ward: 'Emergency Wing', bedNo: 'EMG-002', patient: '-', status: 'CLEANING' }
  ]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Activity className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-lg text-white">MediCore <span className="text-sky-400">Hospital Administration</span></span>
        </Link>
      </header>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Financial & Operational KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Today's Hospital Revenue</div>
            <div className="text-2xl font-black text-white">₹3,45,200</div>
            <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">+14.2% vs avg</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Bed Occupancy Rate</div>
            <div className="text-2xl font-black text-sky-400">82.5%</div>
            <div className="text-[11px] text-slate-400">66 of 80 Beds Occupied</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Total Patients Served</div>
            <div className="text-2xl font-black text-teal-300">214 OPD / IPD</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Infection Surveillance Risk</div>
            <div className="text-2xl font-black text-emerald-400">LOW</div>
            <div className="text-[11px] text-emerald-400 font-bold">Zero Active Ward Clusters</div>
          </div>
        </div>

        {/* Bed & Admission Management Dashboard */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-sky-400" /> Real-time Hospital Bed & Admission Floor Dashboard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {beds.map((b) => (
              <div key={b.bedNo} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white">{b.bedNo}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                    b.status === 'OCCUPIED' ? 'bg-red-500/20 text-red-400' : b.status === 'AVAILABLE' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {b.status}
                  </span>
                </div>
                <div className="text-xs text-slate-400">{b.ward}</div>
                <div className="text-xs text-slate-200 font-semibold pt-1">Patient: {b.patient}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
