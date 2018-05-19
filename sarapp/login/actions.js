import axios from 'axios';
// import { backendlessConfigurations } from '../../config';


const loginDetail = (value) => {
	return{
		type: 'LOGIN_DETAILS',
		payload: axios({
			method: 'POST',
			url: 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/users/login',
			data: value
		})
	}
}

export {loginDetail}