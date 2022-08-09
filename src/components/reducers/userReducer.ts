// actions
export const actions = {
  logIn: "logIn",
  logOut: "logOut"
}

// initialState
export const initialState = {
  user:"",
  isLogIn: false
}

// reducer
export const userReducer = (state:{user: string, isLogIn:boolean}, action:{type:string, payload:string}) => {
  switch(action.type) {
    case actions.logIn:
      return {user:action.payload, isLogIn: true}
    case actions.logOut:
      return initialState
    default:
      return state
  }
}