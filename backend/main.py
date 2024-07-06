from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import httpx

app = FastAPI()

# CORS settings
origins = [
    "http://localhost:4200",  # Angular dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supabase connection details
SUPABASE_URL = 'https://aeqgqtfgftsuupcszxup.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcWdxdGZnZnRzdXVwY3N6eHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwODAwNjUsImV4cCI6MjAzNDY1NjA2NX0.KrDod4FlhAnYF6glH7Uh-FpY3d5drhuhGGzKKWr29vA'

class User(BaseModel):
    email: str
    name: str
    phone: str
    password: str
    confirmPassword: str
    city: str
    role: str
    gender: str

@app.post("/register")
async def register_user(user: User):
    if user.password != user.confirmPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    data = {
        "email": user.email,
        "name": user.name,
        "phone": user.phone,
        "password": user.password,
        "city": user.city,
        "role": user.role,
        "gender": user.gender
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{SUPABASE_URL}/rest/v1/users",
            json=data,
            headers={
                "Content-Type": "application/json",
                "apikey": SUPABASE_KEY,
                "Authorization": f"Bearer {SUPABASE_KEY}"
            }
        )

    if response.status_code != 201:
        raise HTTPException(status_code=response.status_code, detail=response.json())

    return {"message": "User registered successfully"}
