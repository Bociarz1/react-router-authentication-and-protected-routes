import { useContext, useEffect } from "react";
import { UserContext } from "./Context";
import Login from "./Profile/Login";
import Logout from "./Profile/Logout";


function Profile() {
  const {user, userDispatch} = useContext(UserContext)
  return ( 
    <>
      {user.isLogIn ? <Login/> : <Logout/>}
    </>
   );
}

export default Profile;