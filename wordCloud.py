  
# importing all necessery modules 

import matplotlib.pyplot as plt 
import pandas as pd
import requests
import os
import shutil
import urllib3
import nltk

  
http = urllib3.PoolManager()
jsonArray =[]
response_json = requests.get('http://localhost:8983/solr/draft2/select?q=*%3A*').json()
print(response_json)
