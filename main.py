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

@app.route('/search-01')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)

