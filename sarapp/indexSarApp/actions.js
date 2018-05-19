import axios from 'axios'

const getListProfiles = () => {
	const url = 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/data/Users'

	return{
		type: 'LIST_PROFILES',
		payload: axios({
			method:'get',
			url
		})
	}
}

export {getListProfiles}