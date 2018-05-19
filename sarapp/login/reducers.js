const initialState = {
	logins: [],
	isLoading: false,
  	isError: false,
	isSuccess: false
}


const loginDetailReducers = (state = initialState, action)=> {
	switch(action.type){

	    case 'LOGIN_DETAILS_PENDING':
	      	return { ...state, isLoading: true};
	    case 'LOGIN_DETAILS_FULFILLED':
	      	return { ...state, isLoading: false, logins: action.payload.data};
	    case 'LOGIN_DETAILS_REJECTED':
			return { ...state, isError: true, isLoading: false };
		default:
			return state;

	}
}


export default loginDetailReducers;