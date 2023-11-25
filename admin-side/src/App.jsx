import { useState } from "react";
import { Outlet } from 'react-router-dom'
import SidebarNavbar from "./components/SidebarNavbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <SidebarNavbar />
     <Outlet />
     <ToastContainer containerStyle={{  
      position: 'relative'
      }}/>
    </>
  );
}

export default App;
