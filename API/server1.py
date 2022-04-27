from tabnanny import check
from flask import Flask, request, Response
import jsonpickle
import numpy as np
import cv2
from datetime import datetime
import os
from flask_cors import CORS,cross_origin


# Initialize the Flask application
app = Flask(__name__)
CORS(app)

@app.route('/')

def Home():
    return "This is Project's API"

# route http posts to this method
Pictures = []
@app.route('/api/picture', methods=['POST', 'GET'])
def Picture():
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
        os.makedirs(DateFolder+"/others")
        print("The new directory is created!")

    if request.method == 'POST':
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
        Pictures.append(dateNow+"/"+typeWaste+"/"+str(name)+".jpg")
        # encode response using jsonpickle
        response_pickled = jsonpickle.encode(response)

        return Response(response=response_pickled, status=200, mimetype="application/json")
    elif request.method == 'GET':
        return {"Pictures" : Pictures}, 200


from flask import send_file, send_from_directory, safe_join, abort

@app.route('/Showpic', methods=['GET'])
def Showpic():
    filename = 'Picture/2022-03-07/general/1.jpg'
    return send_file(filename, mimetype='image/jpg')



app.config["CLIENT_IMAGES"] = "d:/API/Picture"
print(app.config["CLIENT_IMAGES"])
print(os.listdir("d:/API/Picture/2022-03-07/general"))

@app.route("/get-image/<path:image_name>")
def get_image(image_name):
    try:  
        return send_from_directory(app.config["CLIENT_IMAGES"], image_name, as_attachment=True)
    except FileNotFoundError:
        abort(404)

@app.route("/getnumber/<path:date>")
@cross_origin()
def getnumber(date):
    try:
        numg = len(os.listdir("Picture/"+date+"/general"))
        numr = len(os.listdir("Picture/"+date+"/recycle"))
        numh = len(os.listdir("Picture/"+date+"/hazardous"))
        numo = len(os.listdir("Picture/"+date+"/others"))
        return {"numg":numg,"numr":numr,"numh":numh,"numo":numo}
    except Exception as e:
        print(e)
        abort(404)
        
# start flask app
# app.run(host="0.0.0.0", port=8080)
if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)