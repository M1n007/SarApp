import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import loginDetailReducers from '../login/reducers'
import listUserReducers from '../indexSarApp/reducers'
import profileReducer from '../profile/reducers'

const rootReducers = combineReducers({
  nav: nav,
  loginDetailReducers: loginDetailReducers,
  listUserReducers: listUserReducers,
  profileReducer: profileReducer,
  form: formReducer
})

export default rootReducers