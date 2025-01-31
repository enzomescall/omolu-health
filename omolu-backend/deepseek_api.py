from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class HealthData(BaseModel):
    cholesterol: float
    glucose: float
    iron: float

@app.post("/analyze")
def analyze(data: HealthData):
    # Add your DeepSeek model logic here
    analysis = f"Cholesterol: {data.cholesterol}, Glucose: {data.glucose}, Iron: {data.iron}"
    return {"analysis": analysis}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)