from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.models.user import User
from app.schemas.prediction import PredictionCreate
from app.services import ml_service
from app.repositories import prediction_repository


def create_prediction(db: Session, user: User, payload: PredictionCreate):
    features = payload.model_dump()
    ml_result = ml_service.predict(features)
    row_data = {**features, **ml_result}
    return prediction_repository.create(db, user_id=user.id, data=row_data)


def list_predictions(db: Session, user: User, skip: int = 0, limit: int = 50):
    return prediction_repository.list_by_user(db, user.id, skip=skip, limit=limit)


def get_prediction(db: Session, user: User, prediction_id: int):
    row = prediction_repository.get_by_id(db, prediction_id)
    if row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Prediction not found")
    if row.user_id != user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not allowed")
    return row