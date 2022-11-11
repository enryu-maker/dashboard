import React from 'react'
import { Login } from './Auth/Login';
import './App.css'
import { Home } from './Home/Home';
import SideNav from './Component.js/SideNav';
import { COLORS } from './Theme/Theme';
import { SideNavModal } from './Component.js/SideNavModal';
const App = () => {
  const [show, setShow] = React.useState(false)
  const [Name, setName] = React.useState("Home")
  const [Comp, setComp] = React.useState(React.lazy(() => import("./Comp/HomeComp")))
  return (
    <div style={{
      display: "flex",
      width: "100%",
      alignSelf: "center",
      // justifyContent:"space-between",
      backgroundColor: COLORS.layout
    }}>
      <SideNav show={show} setShow={setShow} Name={Name} setName={setName} setComp={setComp} />
      {
        show && <SideNavModal modalIsOpen={show} Name={Name} setName={setName} setIsOpen={setShow} setComp={setComp} />
      }
      <Home Comp={Comp} />

    </div>
  )
}

export default App;

