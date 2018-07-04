import $ from 'jquery';

export const UPDATE_USER = 'users:updateUsers';
export const SHOW_ERROR =  'users:showError';

export function updateUser(newUser) {
	return {
		type: UPDATE_USER,
		payload: {
			user: newUser
		}
	}
}

export function showError(){
	return {
		type: SHOW_ERROR,
		payload: {
			user: 'ERROR!!'
		}
	}
}

export function apiRequest() {
	return dispatch => {
		$.ajax({
			url: 'https://google.com',
			success() {
				console.log('SUCCESS');
			},
			error() {
				dispatch(showError());
			}
		})
	}
}