import axios from 'axios'
// alert(profileId)
// const objectId = '872D055A-DB2C-074E-FF5F-93C53CA20B00'
const getStatus = () => {
	const url = 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/data/status?loadRelations=user'

	return{
		type: 'ALL_STATUS',
		payload: axios({
			method:'get',
			url
		})
	}
}

export {getStatus}