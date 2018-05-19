import axios from 'axios'
// alert(profileId)
// const objectId = '872D055A-DB2C-074E-FF5F-93C53CA20B00'
const getProfiles = (profileId) => {
	const url = 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/data/Users?where=objectId%3D%27'+profileId+'%27'

	return{
		type: 'ALL_PROFILES',
		payload: axios({
			method:'get',
			url
		})
	}
}

export {getProfiles}