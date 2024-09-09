**Install dependencies**:
 `poetry install`

**Activate virual environment**: `poetry shell`

cd into app/
run: `uvicorn content:app`

**To run in Docker container:** 

Make sure you're in the project root then run:

`docker build -t netflix-clone/contentservice . `


`docker run -p 8000:8000 netflix-clone/contentservice`