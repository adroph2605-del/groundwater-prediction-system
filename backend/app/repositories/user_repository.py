from datetime import datetime, timezone
from sqlalchemy.orm import Session
from app.models.user import User


def get_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def get_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_by_reset_token(db: Session, token: str):
    return db.query(User).filter(User.reset_token == token).first()


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


def set_reset_token(db: Session, user: User, token: str, expires: datetime):
    user.reset_token = token
    user.reset_token_expires = expires
    db.commit()
    db.refresh(user)
    return user


def clear_reset_token(db: Session, user: User):
    user.reset_token = None
    user.reset_token_expires = None
    db.commit()
    db.refresh(user)
    return user


def update_password(db: Session, user: User, hashed_password: str):
    user.hashed_password = hashed_password
    user.reset_token = None
    user.reset_token_expires = None
    db.commit()
    db.refresh(user)
    return user


def delete_user(db: Session, user: User):
    db.delete(user)
    db.commit()