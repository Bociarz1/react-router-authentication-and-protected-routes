import { useContext, useState } from "react";
import { UserContext } from "../Context";
import { actions } from "../reducers/userReducer";

function Logout() {
  const {user, userDispatch} = useContext(UserContext)
  const [checkName,setCheckName] = useState<string>("")
  const handleChange = (e: { target: { value: string; }; }) => {
    setCheckName(e.target.value)
  }
  const handleClick = () => {
      userDispatch({type:actions.logIn, payload:checkName})
  }
  return ( 
    <>
      <div>
        <label> Login: </label>
        <input type="text" placeholder="Login" value={checkName} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Submit</button>
    </>
   );
}

export default Logout;