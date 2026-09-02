from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.deps import get_current_super_admin
from app.models.user import User
from app.schemas.user import UserResponse
from app.repositories import user_repository

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/users", response_model=list[UserResponse])
def list_users(
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=200),
    db: Session = Depends(get_db),
    admin: User = Depends(get_current_super_admin),
):
    return user_repository.list_all(db, skip=skip, limit=limit)


@router.get("/me", response_model=UserResponse)
def admin_me(admin: User = Depends(get_current_super_admin)):
    return admin