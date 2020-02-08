export const getRestaurantName = (state = {
	restaurantName: '',
}, action) => {
	switch (action.type) {
	case 'STORE_RESTAURANT':
    console.log(action.restaurantName);
		return {
			restaurantName: action.restaurantName,
    }
	default:
		return state
	}
}

// export const getRestaurant = (state = {
// 	restaurant: '',
// }, action) => {
// 	switch (action.type) {
// 	case 'STORE_DETAIL':
//     // console.log(action);
// 		return {
// 			restaurant: action.restaurant,
//     }
// 	default:
// 		return state
// 	}
// }