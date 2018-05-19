const initialState = {
    settings:[],
    isLoading: false,
    isError: false
  }
  
  const settingReducer = ( state = initialState, action ) => {
    switch(action.type){
      case "SETTING_PROFILES_PENDING":
        return { ...state, isLoading: true }
      case 'SETTING_PROFILES_FULFILLED':
        return { ...state, isLoading: false, settings: action.payload.data };
      case 'SETTING_PROFILES_REJECTED':
        return { ...state, isLoading: false, isError: true};
      default:
        return state;
    }
  }
  
  export default settingReducer;