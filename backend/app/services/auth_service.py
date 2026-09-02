from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from app.core.security import hash_password, verify_password, create_access_token
from app.repositories import user_repository
from app.schemas.user import UserCreate
from app.schemas.auth import LoginRequest


def register(db: Session, payload: UserCreate):
    existing = user_repository.get_by_email(db, payload.email)
    if existing:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")
    return user_repository.create(
        db,
        email=payload.email.lower(),
        full_name=payload.full_name,
        hashed_password=hash_password(payload.password),
    )


def login(db: Session, payload: LoginRequest) -> str:
    user = user_repository.get_by_email(db, payload.email.lower())
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
    return create_access_token(subject=str(user.id))