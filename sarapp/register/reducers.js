intialState = {
    login:{},
    isLoading: false,
    isError: false
  }
  
  const registerReducer = ( state = intialState, action ) => {
    
    switch(action.type){
      case "POST_REGISTER_PENDING":
        return { ...state, isLoading: true, isError: false }
      case "POST_REGISTER_FULFILLED":
        return { ...state, isLoading: false, isError: false, login: action }
      case "POST_REGISTER_REJECTED":
        return { ...state, isLoading: false, isError: true }
      default:
        return state;
    }
  
  }
  
  export default registerReducer;