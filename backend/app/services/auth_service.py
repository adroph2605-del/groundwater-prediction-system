import secrets
from datetime import datetime, timedelta, timezone

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
        role="user",
    )


def login(db: Session, payload: LoginRequest) -> str:
    user = user_repository.get_by_email(db, payload.email.lower())
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
    return create_access_token(subject=str(user.id))


def create_super_admin(db: Session, email: str, full_name: str, password: str):
    existing = user_repository.get_by_email(db, email)
    if existing:
        return existing
    return user_repository.create(
        db,
        email=email.lower(),
        full_name=full_name,
        hashed_password=hash_password(password),
        role="super_admin",
    )


def forgot_password(db: Session, email: str) -> dict:
    """
    Always return same message (security — don't reveal if email exists).
    In development we also return reset_token so you can test without email.
    Production: send token by email only, never in response.
    """
    user = user_repository.get_by_email(db, email.lower())
    msg = {"message": "If that email exists, a reset token has been generated."}

    if not user:
        return msg

    token = secrets.token_urlsafe(32)
    expires = datetime.now(timezone.utc) + timedelta(hours=1)
    user_repository.set_reset_token(db, user, token, expires)

    # DEV ONLY — remove token from response in production
    msg["reset_token"] = token
    msg["expires_in"] = "1 hour"
    return msg


def reset_password(db: Session, token: str, new_password: str) -> dict:
    user = user_repository.get_by_reset_token(db, token)
    if not user or not user.reset_token_expires:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired token")

    exp = user.reset_token_expires
    if exp.tzinfo is None:
        exp = exp.replace(tzinfo=timezone.utc)
    if exp < datetime.now(timezone.utc):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired token")

    user_repository.update_password(db, user, hash_password(new_password))
    return {"message": "Password updated successfully"}


def change_password(db: Session, user, current_password: str, new_password: str) -> dict:
    if not verify_password(current_password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Current password is wrong")
    user_repository.update_password(db, user, hash_password(new_password))
    return {"message": "Password changed successfully"}