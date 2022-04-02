from __future__ import print_function
from matplotlib import image
import requests
import json
import cv2
from time import sleep

def post_image(img_file):
    """ post image and return the response """
    # img = open(img_file, 'rb').read()
    print("imageloaded")

    values = {'type': 'general', 'class': 'bottle'}
    
    files = {'upload_file': open(img_file, 'rb')}

    URL=test_url
    
    response = requests.post(URL, data=values, files=files)
    
    return response

addr = 'http://localhost:5000'
test_url = addr + '/api/picture'

# prepare headers for http request
# content_type = 'image/jpg'
# headers = {'content-type': content_type}

print("starting")

response = post_image("pi.png")
print(response)
import sys 
status='idlelib' in sys.modules # Put this segment at the end of code 
if status==False: 
    input()
# img = cv2.imread('lena.jpg')
# # encode image as jpeg


# _, img_encoded = cv2.imencode('.jpg', img)
# # send http request with image and receive response
# response = requests.post(test_url, data=img_encoded.tostring(), headers=headers)
# # decode response
print(json.loads(response.text))

# expected output: {u'message': u'image received. size=124x124'}