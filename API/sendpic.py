import requests
def post_image(img_file,waste_type,waste_class):
    """ post image and return the response """
    # img = open(img_file, 'rb').read()
    # ~ print("imageloaded")

    values = {'type': waste_type, 'class': waste_class}
    
    files = {'upload_file': open(img_file, 'rb')}

    URL=url
    
    response = requests.post(URL, data=values, files=files)
    
    return response

addr = 'http://161.246.6.249:443'
url = addr + '/api/picture'
print(post_image("pi.png","general","bottle"))