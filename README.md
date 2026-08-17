# AI-Powered Groundwater Prediction System / Mfumo wa AI wa Kubashiri Maji Ardhini

**English** | **Kiswahili**

---

## Overview / Muhtasari

**English**  
This is a full-stack machine learning system that predicts groundwater availability, recommended drilling depth, expected yield, and water quality risks. It is designed to support well drillers (wachimba visima) in Tanzania by reducing the risk of dry boreholes.

**Kiswahili**  
Huu ni mfumo kamili wa Machine Learning unaotabiri uwepo wa maji ardhini, kina kinachopendekezwa cha kuchimba, kiasi cha maji (yield), na hatari za ubora wa maji. Umefanywa kuwasaidia wachimba visima nchini Tanzania kupunguza hatari ya visima vikavu.

---

## Tech Stack

| Layer          | Technology                          |
|----------------|-------------------------------------|
| Frontend       | React.js + Tailwind CSS + i18n      |
| Backend        | FastAPI + SQLAlchemy + JWT          |
| Machine Learning | XGBoost + Pandas + Scikit-learn  |
| Database       | PostgreSQL (or SQLite for dev)      |
| Languages      | English + Kiswahili (bilingual UI)  |

---

## Project Structure / Muundo wa Project

```
groundwater-prediction-system/
├── frontend/                     # React + Tailwind + i18n (Sw/Eng)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── i18n/                 # Translation files
│   │   │   ├── en.json
│   │   │   └── sw.json
│   │   └── assets/
│   └── package.json
│
├── backend/                      # FastAPI application
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   ├── ml/
│   │   ├── model/                # Saved XGBoost model
│   │   ├── data/
│   │   ├── preprocessing.py
│   │   └── train.py
│   ├── requirements.txt
│   └── .env.example
│
├── data/                         # Datasets
├── notebooks/                    # Exploration & training
├── docs/                         # Documentation
└── README.md
```

---

## Features / Vipengele

- Bilingual interface (English / Kiswahili)
- User registration & login (JWT)
- Groundwater prediction (water presence, depth, yield, quality risk)
- Interactive dashboard & charts
- Prediction history
- Admin panel
- Responsive design

---

## How to Run / Jinsi ya Kuendesha

### 1. Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env              # Edit .env with your settings
uvicorn app.main:app --reload
```

### 2. Frontend
```bash
cd frontend
npm install
npm start
```

Frontend → http://localhost:3000  
Backend  → http://localhost:8000

---

## Language Switching / Kubadilisha Lugha

The system supports **English** and **Kiswahili**.  
Users can switch language from the navbar.  
Translation files are located in `frontend/src/i18n/`.

---

## Team Roles / Majukumu

- **Frontend** → React + Tailwind + i18n
- **Backend**  → FastAPI + Database + Auth
- **ML**       → Data preprocessing, XGBoost training & evaluation
- **Admin**    → Coordination & testing

---

## License
Academic / Research project.
