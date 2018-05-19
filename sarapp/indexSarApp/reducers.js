const initialState = {
    users:[],
    isLoading: false,
    isError: false
  }
  
  const listUserReducers = ( state = initialState, action ) => {
    switch(action.type){
      case "LIST_PROFILES_PENDING":
        return { ...state, isLoading: true }
      case 'LIST_PROFILES_FULFILLED':
        return { ...state, isLoading: false, users: action.payload.data };
      case 'LIST_PROFILES_REJECTED':
        return { ...state, isLoading: false, isError: true};
      default:
        return state;
    }
  }
  
  export default listUserReducers;