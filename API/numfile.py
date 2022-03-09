from datetime import datetime
import os
now = datetime.today()
dateNow = now.strftime("%Y-%m-%d")
print(dateNow)

DateFolder = "Picture/" + dateNow
isExist = os.path.exists(DateFolder)

numg = len(os.listdir(DateFolder+"/general"))
print(numg)