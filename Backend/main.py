from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles  # ✅ important
from pydantic import BaseModel

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Mount book folder
app.mount("/book", StaticFiles(directory="book"), name="book")  # backend/book folder hona chahiye

class Message(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(msg: Message):
    user_message = msg.message.strip().lower()
    if "help" in user_message:
        reply = "Areesha 2.0 says: Sure! Here is a step-by-step guidance..."
    elif "next" in user_message:
        reply = "Areesha 2.0 says: The next step should be to complete the current task and move on..."
    elif "docs" in user_message:
        reply = "Areesha 2.0 says: You can check these book chapters: [Chapter 1 - Introduction], [Chapter 2 - History]..."
    else:
        reply = f"Areesha 2.0 says: You said → {msg.message}"
    return {"reply": reply}
