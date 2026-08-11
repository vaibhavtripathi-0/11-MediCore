'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Pill, Check, AlertTriangle, Search, PackageCheck } from 'lucide-react';

export default function PharmacyDashboard() {
  const [prescriptions, setPrescriptions] = useState([
    { rxId: 'RX-2026-0042', patient: 'Aarav Sharma', doctor: 'Dr. Priya Nair', meds: ['Paracetamol 500mg (10 tabs)', 'Atorvastatin 10mg (30 tabs)'], status: 'PENDING_VERIFICATION' },
    { rxId: 'RX-2026-0041', patient: 'Meera Patel', doctor: 'Dr. Priya Nair', meds: ['Amlodipine 5mg (15 tabs)'], status: 'DISPENSED' }
  ]);

  const [inventory, setInventory] = useState([
    { name: 'Paracetamol 500mg', batch: 'BAT-2026-09', stock: 450, expiry: '2027-11', status: 'AVAILABLE' },
    { name: 'Amoxicillin 250mg', batch: 'BAT-2026-02', stock: 12, expiry: '2026-10', status: 'LOW_STOCK' }
  ]);

  const handleDispense = (rxId: string) => {
    setPrescriptions(prev => prev.map(p => p.rxId === rxId ? { ...p, status: 'DISPENSED' } : p));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Activity className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-lg text-white">MediCore <span className="text-emerald-400">Pharmacy Workspace</span></span>
        </Link>
      </header>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Prescriptions Processed Today</div>
            <div className="text-2xl font-black text-white mt-1">84 RX</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Pending Verification</div>
            <div className="text-2xl font-black text-sky-400 mt-1">3 Prescriptions</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400">Low Stock Batch Alerts</div>
            <div className="text-2xl font-black text-amber-400 mt-1">2 Medicines</div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Pill className="w-5 h-5 text-emerald-400" /> Digital Prescription Verification & Dispensing
          </h2>

          <div className="space-y-3">
            {prescriptions.map((p) => (
              <div key={p.rxId} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-sky-400">{p.rxId}</span>
                    <span className="text-sm font-bold text-white">{p.patient}</span>
                  </div>
                  <div className="text-xs text-slate-400">Prescribing Doctor: {p.doctor}</div>
                  <div className="text-xs text-slate-300 font-semibold pt-1">Meds: {p.meds.join(', ')}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    p.status === 'DISPENSED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {p.status}
                  </span>
                  {p.status !== 'DISPENSED' && (
                    <button
                      onClick={() => handleDispense(p.rxId)}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition"
                    >
                      Verify & Dispense
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
