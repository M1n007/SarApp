import axios from 'axios';

const postRegister = (valueName, valueEmail, valuePass) => {

  alert(JSON.stringify(valueName, valueEmail, valuePass))
  return{
    type: 'POST_REGISTER',
    payload: axios({
      method: 'POST',
      url: 'https://api.backendless.com/47979ED2-09CE-4A47-FF80-245B67727300/2D1371C6-F4BF-015B-FF3E-9EAF51FDDB00/users/register',
      data: {
        "name": valueName,
        "email": valueEmail,
        "password": valuePass
      } 
    })
  }

}

export {  postRegister }