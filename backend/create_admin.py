from app.core.database import SessionLocal, Base, engine
from app.services.auth_service import create_super_admin

Base.metadata.create_all(bind=engine)
db = SessionLocal()

admin = create_super_admin(
    db,
    email="admin@groundwater.tz",
    full_name="Super Admin",
    password="Admin@12345",
)
print(f"Super admin ready: {admin.email} | role={admin.role}")
db.close()