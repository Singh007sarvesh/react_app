import axios from 'axios';
const apiBaseURL = 'http://localhost:5000' 
const instance = axios.create({
    baseURL: apiBaseURL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
});

export const getResaurant = function getResaurant(){
    return instance.get('/api/heackerearth/restaurants');
}
export const cuisine = function cuisine(param){
    return instance.post('/api/heackerearth/cuisines/searches', param);
}

export const getResaurantDetailByName = function getResaurantDetailByName(param){
    console.log(param)
    return instance.get('/api/heackerearth/restaurants/' +param+'');
}
export const getResaurantDetail = function getResaurantDetail(param){
    return instance.get('/api/heackerearth/restaurants/'+param+'');
}
export const sortBasedOnKey = function sortBasedOnKey(param){
    return instance.post('/api/hackerearth/restaurants/sort', param);
}