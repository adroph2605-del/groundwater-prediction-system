"""
Train XGBoost model for groundwater prediction.
Run: python -m ml.train
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import xgboost as xgb
import joblib
import os

def train_model():
    # TODO: Load your real dataset from data/ folder
    # Example:
    # df = pd.read_csv("../../data/borehole_data.csv")

    print("Training script is ready.")
    print("Replace this with real data loading + feature engineering + XGBoost training.")
    print("Save the model to: ml/model/xgboost_groundwater.pkl")

if __name__ == "__main__":
    train_model()
