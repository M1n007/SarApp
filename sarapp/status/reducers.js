intialState = {
    status:[],
    isLoading: false,
    isError: false
  }
  
  const statusReducer = ( state = intialState, action ) => {
    
    switch(action.type){
      case "ALL_STATUS_PENDING":
        return { ...state, isLoading: true, isError: false }
      case "ALL_STATUS_FULFILLED":
        return { ...state, isLoading: false, isError: false, status: action.payload.data }
      case "ALL_STATUS_REJECTED":
        return { ...state, isLoading: false, isError: true }
      default:
        return state;
    }
  
  }
  
  export default statusReducer;