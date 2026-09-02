from sqlalchemy.orm import Session
from app.models.user import User


def get_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def create(db: Session, email: str, full_name: str, hashed_password: str, role: str = "user"):
    user = User(
        email=email,
        full_name=full_name,
        hashed_password=hashed_password,
        role=role,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def list_all(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()