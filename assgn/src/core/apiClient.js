import axios from 'axios';
const apiBaseURL = 'http://localhost:5000' 
const instance = axios.create({
    baseURL: apiBaseURL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
});

export const getResaurant = function getResaurant(param1, param2){
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(param1)
    if (param1 == ''){
        return instance.get('/api/heackerearth/restaurants');
    }
    else{
        return instance.get('/api/heackerearth/restaurants?start='+param1+'&limit='+param2);
    }
    
}
export const cuisine = function cuisine(param){
    return instance.post('/api/heackerearth/cuisines/searches', param);
}

export const getResaurantDetailByName = function getResaurantDetailByName(param){
    return instance.get('/api/heackerearth/restaurants/' +param+'');
}
export const getResaurantDetail = function getResaurantDetail(param){
    return instance.get('/api/heackerearth/restaurants/'+param+'');
}
export const sortBasedOnKey = function sortBasedOnKey(param){
    return instance.post('/api/hackerearth/restaurants/sort', param);
}