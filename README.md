# MediCore — Enterprise Hospital Management & Patient Healthcare Platform

"One Hospital. One Intelligent Healthcare Platform."

---

## 🏛️ Architecture Overview

MediCore connects the complete hospital and patient healthcare ecosystem using a decoupled, enterprise stack:

- **Frontend**: Next.js 14 (App Router, TypeScript, Tailwind CSS, Lucide React icons, Recharts) in `frontend/`.
- **Backend API**: Python FastAPI 0.110+, Pydantic v2, SQLAlchemy 2.x, Alembic migrations in `backend/`.
- **Database**: PostgreSQL (Normalized RBAC schemas, EMR clinical history, hospital beds, pharmacy inventory, lab orders).
- **In-Memory Cache & WebSockets**: Redis & FastAPI WebSockets for real-time queue tokens and live ward notifications.

---

## 🚀 Getting Started

### 1. Backend Setup (FastAPI + Python)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
FastAPI Swagger Documentation will be live at: `http://localhost:8000/docs`

### 2. Frontend Setup (Next.js 14)
```bash
cd frontend
npm install
npm run dev
```
Next.js Web Portal will be live at: `http://localhost:3000`

---

## 👥 Supported Roles & Access Control (RBAC)

1. `PATIENT`: Digital health portal, appointment booking, RX view, lab reports, homecare requests.
2. `DOCTOR`: Clinical EMR workspace, prescription writer, lab test ordering, follow-up queues.
3. `NURSE`: Ward bed management, patient vitals recorder, daily medication administration logs.
4. `RECEPTIONIST`: Patient OPD registration, token generation (e.g. A-101), slot check-ins.
5. `PHARMACIST`: Digital prescription verification, batch inventory management, expiry tracking.
6. `LAB_TECHNICIAN`: Specimen collection tracking, lab test entry, critical value flags (`HIGH`/`CRITICAL`).
7. `HOSPITAL_ADMIN`: Financial analytics, ward bed occupancy, department load, infection surveillance.
8. `SUPER_ADMIN`: System-wide access, governance, and audit log inspection.
