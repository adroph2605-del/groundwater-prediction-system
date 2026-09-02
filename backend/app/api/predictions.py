from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.deps import get_current_user
from app.models.user import User
from app.schemas.prediction import PredictionCreate, PredictionResponse
from app.services import prediction_service

router = APIRouter(prefix="/predictions", tags=["predictions"])


@router.post("", response_model=PredictionResponse, status_code=201)
def create_prediction(
    payload: PredictionCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return prediction_service.create_prediction(db, user, payload)


@router.get("", response_model=list[PredictionResponse])
def list_predictions(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=100),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return prediction_service.list_predictions(db, user, skip=skip, limit=limit)


@router.get("/{prediction_id}", response_model=PredictionResponse)
def get_prediction(
    prediction_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    return prediction_service.get_prediction(db, user, prediction_id)