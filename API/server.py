from tabnanny import check
from flask import Flask, request, Response
# import jsonpickle
import numpy as np
import cv2
from datetime import datetime
import os

now = datetime.today()
dateNow = now.strftime("%Y-%m-%d")
print(dateNow)

DateFolder = "Picture/" + dateNow
isExist = os.path.exists(DateFolder)

if not isExist:
    os.makedirs(DateFolder)
    os.makedirs(DateFolder+"/general")
    os.makedirs(DateFolder+"/recycle")
    os.makedirs(DateFolder+"/hazardous")
    print("The new directory is created!")


# Initialize the Flask application
app = Flask(__name__)

# route http posts to this method

@app.route('/api/test', methods=['POST'])
def test():
    print("!!!request is coming!!!")
    r = request
    x = dict(request.form.items())
    typeWaste = x.get("type")
    print(x)
    # convert string of image data to uint8
    nparr = np.fromstring(r.files.get("upload_file").read(), np.uint8)
    # decode image
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    # do some fancy processing here....
    
    numg = len(os.listdir(DateFolder+"/general"))
    numr = len(os.listdir(DateFolder+"/recycle"))
    numh = len(os.listdir(DateFolder+"/hazardous"))
    
    if typeWaste=="general":
        name = numg + 1
    elif typeWaste=="recycle":
        name = numr + 1
    elif typeWaste=="hazardous":
        name = numh + 1
    
    cv2.imwrite("Picture/"+dateNow+"/"+typeWaste+"/"+str(name)+".jpg",img)

    # cv2.imwrite("Picture/mm.jpg", img)

    # build a response dict to send back to client
    response = {'message': 'image received. size={}x{}'.format(img.shape[1], img.shape[0])
                }
    # encode response using jsonpickle
    # response_pickled = jsonpickle.encode(response)

    return Response(response=response, status=200, mimetype="application/json")

# start flask app
app.run(host="0.0.0.0", port=5000)


# from flask import Flask
# from flask import render_template
# from flask import request


# app = Flask(__name__)

# @app.route("/")
# def index(): #โมดูลรับค่าจากไฟล์ index.html โดยการส่งค่าในรูปแบบ POST
#     return render_template('index.html')

# @app.route('/save', methods=['POST'])
# def save(): #โมดูลแสดงข้อมูล

#     # x = dict(request.form.items())
#     x = request.form.items()
#     print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",type(x))
#     # return "รับค่าสำเร็จ %s"%(x)
#     return "รับค่าสำเร็จ %s"%(x)


# if __name__ == "__main__":
#     app.run(debug=True)