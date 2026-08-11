'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Activity, Users, Calendar, Clock, CheckCircle2, UserCheck, Stethoscope, FileText, Bell, Search, Plus } from 'lucide-react';

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([
    { id: '1', token: 'A-101', patientName: 'Aarav Sharma', patientCode: 'MED-PAT-100001', age: 34, gender: 'Male', time: '14:30 PM', status: 'WAITING', complaint: 'Routine Cardiac Follow-up & Chest Tightness' },
    { id: '2', token: 'A-102', patientName: 'Meera Patel', patientCode: 'MED-PAT-100002', age: 48, gender: 'Female', time: '15:00 PM', status: 'CONFIRMED', complaint: 'Hypertension Consultation' },
    { id: '3', token: 'A-103', patientName: 'Rohan Gupta', patientCode: 'MED-PAT-100003', age: 29, gender: 'Male', time: '15:30 PM', status: 'CONFIRMED', complaint: 'ECG Report Evaluation' }
  ]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Doctor Portal Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Activity className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">MediCore <span className="text-teal-400">Doctor Portal</span></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
            <Stethoscope className="w-4 h-4 text-teal-400" />
            <span className="font-bold">Dr. Priya Nair</span>
            <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">Cardiology</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Doctor Metrics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Today's OPD Appointments</div>
            <div className="text-2xl font-black text-white">24 Patients</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Currently Waiting OPD</div>
            <div className="text-2xl font-black text-sky-400">5 Patients</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Consultations Completed</div>
            <div className="text-2xl font-black text-emerald-400">15 Completed</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400">Pending Lab Reviews</div>
            <div className="text-2xl font-black text-purple-400">4 Reports</div>
          </div>
        </div>

        {/* Doctor OPD Waiting Patient Queue */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-400" /> Today's OPD Waiting Queue
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Select a patient to open clinical EMR & write digital prescription</p>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search patient code / name..."
                className="pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-black text-sm flex items-center justify-center">
                    {apt.token}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white">{apt.patientName}</h3>
                      <span className="text-[10px] text-slate-400 font-mono">({apt.patientCode})</span>
                      <span className="text-[10px] text-slate-400">• {apt.age} yrs ({apt.gender})</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">Complaint: {apt.complaint}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/20">
                    {apt.time}
                  </span>

                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 text-slate-950 font-extrabold text-xs shadow hover:opacity-95 transition flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Start EMR Session
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
