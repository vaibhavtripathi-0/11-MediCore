'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, FlaskConical, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

export default function LabDashboard() {
  const [labOrders, setLabOrders] = useState([
    { orderId: 'LAB-2026-901', patient: 'Aarav Sharma', test: 'Lipid Profile & ECG', doctor: 'Dr. Priya Nair', status: 'PROCESSING', flag: 'NORMAL' },
    { orderId: 'LAB-2026-902', patient: 'Meera Patel', test: 'HbA1c & Fasting Blood Sugar', doctor: 'Dr. Priya Nair', status: 'VERIFIED', flag: 'HIGH' }
  ]);

  const handleVerify = (orderId: string) => {
    setLabOrders(prev => prev.map(o => o.orderId === orderId ? { ...o, status: 'VERIFIED' } : o));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Activity className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-lg text-white">MediCore <span className="text-purple-400">Laboratory System</span></span>
        </Link>
      </header>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Samples Processed Today</div>
            <div className="text-2xl font-black text-white mt-1">62 Specimens</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">In-Progress Tests</div>
            <div className="text-2xl font-black text-purple-400 mt-1">4 Tests</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Critical Result Flags</div>
            <div className="text-2xl font-black text-red-400 mt-1">1 Critical Flag</div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-purple-400" /> Lab Test Result Entry & Verification
          </h2>

          <div className="space-y-3">
            {labOrders.map((o) => (
              <div key={o.orderId} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-purple-400">{o.orderId}</span>
                    <span className="text-sm font-bold text-white">{o.patient}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${o.flag === 'HIGH' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {o.flag}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-semibold">{o.test}</div>
                  <div className="text-xs text-slate-400">Ordering Doctor: {o.doctor}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    o.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-purple-500/10 text-purple-400'
                  }`}>
                    {o.status}
                  </span>
                  {o.status !== 'VERIFIED' && (
                    <button
                      onClick={() => handleVerify(o.orderId)}
                      className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-extrabold text-xs transition flex items-center gap-1"
                    >
                      <FileCheck className="w-3.5 h-3.5" /> Submit & Verify
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
