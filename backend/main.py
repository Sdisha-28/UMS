
from fastapi import Depends, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.security import OAuth2PasswordBearer


from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import httpx
from passlib.context import CryptContext

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
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
#oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
class User(BaseModel):
    email: str
    name: str
    dob: str
    phone: str
    password: str
    confirmPassword: str
    city: str
    role: str
    gender: str

class LoginData(BaseModel):
    email: str
    password: str

@app.post("/register")
async def register_user(user: User):
    if user.password != user.confirmPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    hashed_password = pwd_context.hash(user.password) 
    data = {
        "email": user.email,
        "name": user.name,
        "dob": user.dob, # "yyyy-mm-dd
        "phone": user.phone,
        "password": hashed_password,  # Store the plain text password
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
    
    msg = ''
    if response.status_code == 409 and response.json().get("message") == "user already exists":
        msg = "user already exists"
    elif response.status_code == 201:
        msg = "user registered successfully"
    if response.status_code != 201:
        raise HTTPException(status_code=response.status_code, detail=response.json())
    
    return {"message": msg}


@app.post("/login")
async def login_user(login_data: LoginData):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{SUPABASE_URL}/rest/v1/users?email=eq.{login_data.email}",
            headers={
                "Content-Type": "application/json",
                "apikey": SUPABASE_KEY,
                "Authorization": f"Bearer {SUPABASE_KEY}"
            }
        )
    
    if response.status_code != 200 or not response.json():
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    user = response.json()[0]

    if not pwd_context.verify(login_data.password, user['password']):  # Verify the hashed password
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    return {"message": "Login successful", "name": user["name"]}

@app.post("/logout")
async def logout():
    # Implement any necessary logout logic here
    # For example, invalidate user sessions or tokens if applicable
    return {"message": "Logged out successfully"}

