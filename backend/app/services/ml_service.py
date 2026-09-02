from pathlib import Path
from typing import Any
from app.core.config import settings

_cached_model: Any = None


def _try_load_model():
    global _cached_model
    if _cached_model is not None:
        return _cached_model
    path: Path = settings.model_full_path
    if not path.exists():
        return None
    try:
        import joblib
        _cached_model = joblib.load(path)
        return _cached_model
    except Exception:
        return None


def _placeholder(features: dict) -> dict:
    return {
        "water_potential": "HIGH",
        "expected_depth": "45 – 60 metres",
        "formation": "Fractured Basement Rock",
        "aquifer_potential": "GOOD",
        "expected_yield": "MEDIUM – HIGH",
        "water_quality": "GOOD",
        "ph_range": "7.1 – 7.5",
        "salinity": "LOW",
        "confidence": 86,
        "recommendation": "Suitable for further drilling",
        "model_version": "placeholder",
    }


def predict(features: dict) -> dict:
    model = _try_load_model()
    if model is None:
        return _placeholder(features)
    # Baada ya ML team ku-save model, implement real predict hapa
    return _placeholder(features)