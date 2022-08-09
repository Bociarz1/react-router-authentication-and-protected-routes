import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context";

function NavBar() {
  const {user} = useContext(UserContext)
  return ( 
    <div className="navBar">
      <Link to='/'>HOME</Link>
      <Link to='about'> ABOUT</Link>
      <Link to='products'> PRODUCTS</Link>
      {user.isLogIn ? 
        <Link to='profile'> {user.user}'s PROFILE</Link> :
        <Link to='profile'> LOGIN</Link>
      }
    </div>
   );
}

export default NavBar;