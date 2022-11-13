import React from 'react'
import { Login } from './Auth/Login';
import './App.css'
import { Home } from './Home/Home';
import SideNav from './Component.js/SideNav';
import { COLORS } from './Theme/Theme';
import { SideNavModal } from './Component.js/SideNavModal';

import MinFooter from './Component.js/MinFooter';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
const App = () => {
  const [show, setShow] = React.useState(false)
  const [Name, setName] = React.useState("Home")
  const [Comp, setComp] = React.useState(React.lazy(() => import("./Comp/HomeComp")))
 
  
  
  const HomeNav = () => {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        alignSelf: "center",
        // justifyContent:"space-between",
        backgroundColor: COLORS.white
      }}>
        <div style={{
          display: "flex",
          width: "100%",
          alignSelf: "center",
          // justifyContent:"space-between",
          backgroundColor: COLORS.white
        }}>
     <SideNav show={show} setShow={setShow} Name={Name} setName={setName} setComp={setComp} />
        {
          show && <SideNavModal modalIsOpen={show} Name={Name} setName={setName} setIsOpen={setShow} setComp={setComp} />
        }
        <Home Comp={Comp} />
        </div>
      
      <MinFooter />
    </div>
    )
  }
  
  const access = useSelector(state => state.Reducers.access)

  return (
    
        <Routes>
            {
                access===null?
            <Route exact path="/" element={<Login/>} />
            :
            <Route exact path="/" element={<HomeNav/>} />
            }
        </Routes>
      
  )
}

export default App;

