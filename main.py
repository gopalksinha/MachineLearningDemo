# importing flask module fro
from flask import Flask, render_template,request
import matplotlib.pyplot as plt 
import pandas as pd
import requests
import os
import shutil
import urllib3
import nltk

# initializing a variable of Flask
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('search.html')

@app.route('/search',methods=['GET', 'POST'])
def submit():
    searchTerm = request.form['searchBox']
    http = urllib3.PoolManager()
    jsonArray =[]
    response_json = requests.get('http://localhost:8983/solr/draft2/select?defType=edismax&fl=INCIDENT_NUMBER%2CSUMMARY%2Cscore&ps=5&q='+searchTerm+'&qf=SUMMARY&qs=5&rows=200&stopwords=true').json()
    print('http://localhost:8983/solr/draft2/select?defType=edismax&fl=INCIDENT_NUMBER%2CSUMMARY%2Cscore&ps=5&q='+searchTerm+'&qf=SUMMARY&qs=5&rows=200&stopwords=true')
    for document in response_json['response']['docs']:
        nf = document['INCIDENT_NUMBER']
        sf = document['SUMMARY']
        scf = document['score']
        jsonArray.append(nf)
        jsonArray.append(sf)
        jsonArray.append(scf)
    print(jsonArray)
    return dict(jsonArray=jsonArray)

    #return render_template('search.html', jsonArray=jsonArray)


if __name__ == '__main__':
    app.run(debug=True)

