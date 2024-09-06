//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErroComponent";
import Restaurentmenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"


const AppLayout=()=>{
  const [username,setUsername]=useState();
  useEffect(()=>{
      const data={
          name:"umesh",
      };
      setUsername(data.name);
  },[]);

  return (
      

      <Provider store={appStore}>  
      <UserContext.Provider value={{loggedinuser:username,setUsername}}>  
      <div className="app">

      <Header/>
       <Outlet/>

        </div>
      
      
      </UserContext.Provider>
      </Provider> 
  )
};

const appRouter=createBrowserRouter ([
  {
      path:"/",
      element:<AppLayout/>,

      
      errorElement:<ErrorComponent/>,
      children:[

          {
              path:"/",
              element:<Body/>,



          },
          {
              path:"/About",
              element:<About/>
          },
      
          {
              path:"/Contact",
              element:<Contact/>
          },

          {
              path:"/restaurents/:resId",
              element:<Restaurentmenu/>
          },

          {
              path:"/cart",
              element:<Cart/>
          },


      ]
  },
  
])


export default appRouter;
