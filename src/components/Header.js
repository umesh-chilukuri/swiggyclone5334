import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{


  let btnName="login";
  const {loggedinuser}=useContext(UserContext);
  console.log(loggedinuser);
  const [btnNameReact,setbtnNameReact]=useState("login")

  //subscrbing store using selector

  const cartItems=useSelector((store)=>store.cart.items);


    return(
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 shadow-sm">
        <div className="container-app flex items-center justify-between py-2">
          <div className="logo-container flex items-center gap-3">
              <img className="w-12 h-12 object-contain"    src={"https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"}/>
              <span className="hidden sm:inline-block text-lg font-semibold">Swiggy Clone</span>
          </div>
          <nav className="flex items-center">
           <ul className="flex items-center gap-2 sm:gap-4">
              <li>
                <Link className="nav-link px-2 py-1" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link px-2 py-1" to="/About">About</Link>
              </li>
              <li>
                <Link className="nav-link px-2 py-1" to="/Contact">Contact</Link>
              </li>
              <li className="font-semibold">
                <Link className="nav-link px-2 py-1" to="/cart">Cart - ({cartItems.length} items)</Link>
              </li>
              <li>
                <button
                 className="btn-secondary"
                 onClick={()=>{
                  btnNameReact=="login"?setbtnNameReact("logout"):setbtnNameReact("login");

                  }}>
                  {btnNameReact}</button>
              </li>
              <li className="hidden sm:block font-bold text-gray-700">{loggedinuser}</li>
           </ul>
          </nav>
        </div>
      </div>  
    )
};


export default Header;