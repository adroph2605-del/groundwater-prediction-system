from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Groundwater Prediction API",
    description="AI system for predicting groundwater availability for well drillers in Tanzania",
    version="1.0.0"
)

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Groundwater Prediction API is running",
        "message_sw": "API ya Kubashiri Maji Ardhini inaendesha",
        "docs": "/docs"
    }

@app.get("/health")
def health():
    return {"status": "ok"}
