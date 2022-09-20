from fastapi import File, UploadFile, FastAPI
import matplotlib.pyplot as plt
import os
import cv2

app = FastAPI()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET","POST","OPTIONS"],
    allow_headers=["Access-Control-Allow-Headers", 'Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 'Set-Cookie'],
)


@app.post("/upload")
def upload(file: UploadFile = File(...)):
    try:
        print("chal gaya")

        with open(file.filename, 'wb') as f:
            while contents := file.file.read(1024 * 1024 * 1024):
                f.write(contents)

        dir_name = os.path.join(os.getcwd(),file.filename)
        vid = cv2.VideoCapture(dir_name)

        while vid.isOpened():
            ret , frame = vid.read()
            
            cv2.imshow('' , frame)
            if cv2.waitKey(1) & 0xFF== ord('q'):
                break
        vid.release()


    except Exception as err:
        print(f"There was an error uploading the file {err}")
    finally:
        file.file.close()

    return {"message": f"Successfully uploaded {file.filename}"}



@app.post('/upload')
async def upload(file:UploadFile):
    try:
        return {'File':file.filename}
    except:
        print('Error Parsing')