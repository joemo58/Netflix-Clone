from fastapi import FastAPI

# Create the FastAPI app
app = FastAPI()

# Define the /api/content/hit endpoint
@app.get("/api/content/hit")
def get_hit():
    return {"count": 1}
