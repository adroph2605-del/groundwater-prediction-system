from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import Base, engine
from app.api.router import api_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Groundwater Prediction API",
    description="Decision-support API for well drillers in Tanzania",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.get("/")
def root():
    return {
        "message": "Groundwater Prediction API is running",
        "docs": "/docs",
        "health": "/api/health",
    }