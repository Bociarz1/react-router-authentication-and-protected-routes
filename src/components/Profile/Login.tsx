import { useContext } from "react";
import { UserContext } from "../Context";
import { actions } from "../reducers/userReducer";

function Login() {
  const {user, userDispatch} = useContext(UserContext)
  return ( 
    <>
      Hello {user.user}
      <div>
        <button onClick={()=>userDispatch({type:actions.logOut, payload:""})}>Log Out</button>
      </div>
    </>
   );
}

export default Login;