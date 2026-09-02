from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field


class PredictionCreate(BaseModel):
    latitude: float = Field(..., ge=-90, le=90)
    longitude: float = Field(..., ge=-180, le=180)
    resistivity: Optional[float] = Field(None, ge=0)
    rock_type: Optional[str] = Field(None, max_length=100)
    elevation: Optional[float] = None
    rainfall: Optional[float] = Field(None, ge=0)


class PredictionResponse(BaseModel):
    id: int
    latitude: float
    longitude: float
    resistivity: Optional[float] = None
    rock_type: Optional[str] = None
    elevation: Optional[float] = None
    rainfall: Optional[float] = None
    water_potential: str
    expected_depth: str
    formation: str
    aquifer_potential: str
    expected_yield: str
    water_quality: str
    ph_range: str
    salinity: str
    confidence: int
    recommendation: str
    model_version: str
    created_at: datetime

    class Config:
        from_attributes = True