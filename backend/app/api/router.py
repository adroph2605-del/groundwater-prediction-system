from fastapi import APIRouter
from app.api import auth, predictions, health

api_router = APIRouter(prefix="/api")
api_router.include_router(health.router)
api_router.include_router(auth.router)
api_router.include_router(predictions.router)