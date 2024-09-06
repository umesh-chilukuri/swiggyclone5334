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
      <div className="flex  justify-between  bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100 ">
        <div className="logo-container">
            <img className="w-24"    src={"https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"}/>
        </div>
        <div className="flex items-center">
         <ul className="flex p-4  m-4">
            <li className="px-4">
              <Link to="/"> HOme</Link>  </li>
            <li className="px-4">
              <Link to="/About">aboutus</Link></li>
            <li  className="px-4">
              <Link to="/Contact">ContactUs  </Link></li>
            <li  className="px-4 font-bold">
          
            <Link to="/cart">cart - ({cartItems.length}items) </Link>
               
              </li>
            <button
             className="login"
             onClick={()=>{
              btnNameReact=="login"?setbtnNameReact("logout"):setbtnNameReact("login");

              }}>
              {btnNameReact}</button>
              <li  className="px-4 font-bold">{loggedinuser}</li>
         </ul>
        </div>
      </div>  
    )
};


export default Header;