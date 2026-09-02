from datetime import datetime, timezone
from sqlalchemy import String, Float, Integer, DateTime, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base


class Prediction(Base):
    __tablename__ = "predictions"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True, nullable=False)

    latitude: Mapped[float] = mapped_column(Float, nullable=False)
    longitude: Mapped[float] = mapped_column(Float, nullable=False)
    resistivity: Mapped[float | None] = mapped_column(Float, nullable=True)
    rock_type: Mapped[str | None] = mapped_column(String(100), nullable=True)
    elevation: Mapped[float | None] = mapped_column(Float, nullable=True)
    rainfall: Mapped[float | None] = mapped_column(Float, nullable=True)

    water_potential: Mapped[str] = mapped_column(String(50), nullable=False)
    expected_depth: Mapped[str] = mapped_column(String(100), nullable=False)
    formation: Mapped[str] = mapped_column(String(150), nullable=False)
    aquifer_potential: Mapped[str] = mapped_column(String(50), nullable=False)
    expected_yield: Mapped[str] = mapped_column(String(50), nullable=False)
    water_quality: Mapped[str] = mapped_column(String(50), nullable=False)
    ph_range: Mapped[str] = mapped_column(String(50), nullable=False)
    salinity: Mapped[str] = mapped_column(String(50), nullable=False)
    confidence: Mapped[int] = mapped_column(Integer, nullable=False)
    recommendation: Mapped[str] = mapped_column(Text, nullable=False)
    model_version: Mapped[str] = mapped_column(String(50), default="placeholder")

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
    )

    user = relationship("User", back_populates="predictions")