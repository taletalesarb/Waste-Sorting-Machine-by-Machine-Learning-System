import os
DateFolder = 'Picture/7'

isExist = os.path.exists(DateFolder)

if not isExist: 
  os.makedirs(DateFolder)
  print("The new directory is created!")