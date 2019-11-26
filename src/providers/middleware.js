import { loadUser }  from "./actions/authActions";
import { returnErrors } from './actions/errorActions';
import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_PROCESS,
    LOGOUT_SUCCESS,
    REGISTER_PROCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './actions/action-types';

export const GetUserMiddleWare = store => next => async action => {
    if(action.type == 'USER_LOADING'){
        const token =  localStorage.getItem('token');
        if (token != null && token != 'undefined') {
            store.dispatch({
                type: USER_LOADED,
                payload: token
            })
        }
        else {
            store.dispatch({
                type: AUTH_ERROR
            });
        }
        
    }

    if(action.type == 'LOGIN_PROCESS'){

            console.log("qqqqqqqqqqqqqqqqq");
            const config = {
                headers: {
                  'Content-Type': 'application/json'
                }
              };
    
              //console.log(action.payload["email"])
            
              // Request body
    
              const email = action.payload["email"];
              const password = action.payload["password"];
    
              const body = JSON.stringify({email , password });

              
              //next(action);
            await  axios
                .post('https://loft-taxi.glitch.me/auth', body, config)
                .then(res => {
                  console.log('1111111111111112222222222222222')
                  if (res.data.success == true) {
                    store.dispatch({
                      type: LOGIN_SUCCESS,
                      payload: res.data
                    })
                    //next(action);
                  }
                  else {
                    store.dispatch({
                      type: LOGIN_FAIL,
                      payload: res.data
                    });
                   // next(action);
                  }
                })
                .then(res => 
                    {
                        console.log('1111111111111112222222222222222')
                    })
                   // .then(next(action))
               /* .catch(err => {
                  store.dispatch(
                    returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
                  );
                  store.dispatch({
                    type: LOGIN_FAIL
                  });
                });*/
  
            
  

            
        
            
    }

    if(action.type == 'REGISTER_PROCESS'){

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const name = action.payload["name"];
      const surname = action.payload["surname"];
      const email = action.payload["email"];
      const password = action.payload["password"];
    
      // Request body
      const body = JSON.stringify({ name, surname, email, password });
    
      await axios
        .post('https://loft-taxi.glitch.me/register', body, config)
        .then(res => {
          if (res.data.success == true) {
            store.dispatch({
              type: REGISTER_SUCCESS,
              payload: res.data
            })
          }
          else {
            store.dispatch({
              type: REGISTER_FAIL,
              payload: res.data
            });
          }
        }
    
        )
        .catch(err => {
          store.dispatch(
            returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
          );
          store.dispatch({
            type: REGISTER_FAIL
          });
        });


}

   /* if(action.type == 'LOGIN_SUCCESS'){

    }*/





    next(action);

    console.log(action)
    
}

export default GetUserMiddleWare