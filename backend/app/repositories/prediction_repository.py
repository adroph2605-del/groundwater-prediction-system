from sqlalchemy.orm import Session
from app.models.prediction import Prediction


def create(db: Session, user_id: int, data: dict):
    row = Prediction(user_id=user_id, **data)
    db.add(row)
    db.commit()
    db.refresh(row)
    return row


def list_by_user(db: Session, user_id: int, skip: int = 0, limit: int = 50):
    return (
        db.query(Prediction)
        .filter(Prediction.user_id == user_id)
        .order_by(Prediction.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )


def get_by_id(db: Session, prediction_id: int):
    return db.query(Prediction).filter(Prediction.id == prediction_id).first()