import React, { Component } from 'react'
import { AsyncStorage, Text } from 'react-native'
import axios from 'axios'

const getSettingProfiles = (valueId) => {
	const url = 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/data/Users?where=objectId%3D%27'+valueId+'%27'
	

	return{
		type: 'SETTING_PROFILES',
		payload: axios({
			method:'get',
			url
		})
	}
}

const updateBio = (valueBio, valueId) => {
	const url = 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/data/Users?where=objectId%3D%27'+valueId+'%27'
	

	return{
		type: 'EDIT_PROFILES',
		payload: axios({
			method:'POST',
			url,
			data: valueBio
		})
	}
}

export {getSettingProfiles, updateBio}