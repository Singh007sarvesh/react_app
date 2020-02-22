from flask import request, redirect, Flask, jsonify, session
from werkzeug.utils import secure_filename
import base64
import json
from json import loads, dumps
from flask_cors import CORS
import os
from database import Database
import cv2
import numpy as np
from flask_json import FlaskJSON, JsonError, json_response, as_json
from flask import jsonify, abort
from flask_restful import Resource, Api 
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
FlaskJSON(app)
app.config["IMAGE_UPLOADS"] = "image"
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["JPEG", "JPG", "PNG", "GIF"]


def get_paginated_list(results, url, start, limit):
    start = int(start)
    limit = int(limit)
    count = len(results)
    if count < start or limit < 0:
        abort(404)
    # make response
    obj = {}
    obj['start'] = start
    obj['limit'] = limit
    obj['count'] = count
    # make URLs
    # make previous url
    if start == 1:
        obj['previous'] = ''
    else:
        start_copy = max(1, start - limit)
        limit_copy = start - 1
        obj['previous'] = url + '?start=%d&limit=%d' % (start_copy, limit_copy)
    # make next url
    if start + limit > count:
        obj['next'] = ''
    else:
        start_copy = start + limit
        obj['next'] = url + '?start=%d&limit=%d' % (start_copy, limit)
    # finally extract result according to bounds
    obj['results'] = results[(start - 1):(start - 1 + limit)]
    return obj

@app.route('/api/heackerearth/restaurants/<string:data>', methods=['GET'])
def search_by_rest_id(data):
    database = Database()
    data = database.search_by_rest_id(data)
    if data == None:
        return jsonify([{}])
    else:
        for result in data:
            content = {}
            content = {'restaurantId': result[0], 'restaurantName': result[1], 'Cuisines':result[2],
                'Average Cost for two':result[3],'Currency':result[4],'Has Table booking':result[5],
                'Has Online delivery':result[6],'Aggregate rating':result[7],
                'Rating color':result[8],'Rating text':result[9],'Votes':result[10],
                'Address':result[14],'Longitude':result[17],'Latitude':result[18]}
        return jsonify(content)
# @app.route('/api/heackerearth/restaurants/<string:restaurantName>', methods=['GET'])
# def search_by_rest_name(restaurantName):
#     print("*****")
#     print(restaurantName)
#     database = Database()
#     data = database.search_by_rest_name(restaurantName)
#     print(data)
#     payload = []
#     if data == None:
#         payload.append({})
#         return payload
#     else:
#         content = {}
#         for result in data:
#             content = {'restaurantId': result[0], 'restaurantName': result[1]}
#             payload.append(content)
#         return jsonify(payload)

@app.route('/api/heackerearth/restaurants/cuisines/<string:query>', methods=['GET'])
def search_by_cuisine(query):
    database = Database()
    data = database.search_by_cuisine(query)
    if data == None:
        return {}
    else:
        payload = []
        for result in data:
            content = {}
            content = {'restaurantId': result[0], 'restaurantName': result[1]}
            payload.append(content)
        return jsonify(payload)


@app.route('/api/heackerearth/restaurants', methods=['GET'])
def restaurant():
    database = Database()
    data = database.get_restaurant()
    # print(len(data))
    if data == None:
        return {}
    else:
        payload = []
        for result in data:
            content = {}
            content = {'restaurantId': result[0], 'restaurantName': result[1]}
            payload.append(content)
        return jsonify(get_paginated_list(
        payload, 
        '/api/heackerearth/restaurants', 
        start=request.args.get('start', 1), 
        limit=request.args.get('limit', 20)
    ))


@app.route('/api/hackerearth/restaurants/sort', methods=['POST'])
def sort():
    payload = request.get_json()
    data = payload["data"]
    database = Database()
    data = database.sort_based_on_key(data)
    if data == None:
        return {}
    else:
        payload = []
        for result in data:
            content = {}
            content = {'restaurantId': result[0], 'restaurantName': result[1]}
            payload.append(content)
        return jsonify(payload)


if __name__ == '__main__':
    app.run(port=5000,debug=True)

