import React, { Suspense } from 'react';
import SideNav from '../Component.js/SideNav'
import { Helmet } from 'react-helmet-async'
import { COLORS, FONTS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import Loading from '../Component.js/Loading';
import { SideNavModal } from '../Component.js/SideNavModal'
import { HomeComp } from '../Comp/HomeComp';
import { lazy } from '../utils/Lazy';
export const Home = () => {
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:600px)')
    const [show, setShow] = React.useState(false)
    const [Name, setName] = React.useState("Home")
    const [Comp, setComp] = React.useState(React.lazy(() => import("../Comp/HomeComp")))
    // const Screen = React.lazy(() => import("../Comp/HomeComp"))
    // console.log(Screen)
    return (
        <div style={{
            display: 'flex',
            flexDirection: matches ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: COLORS.layout
        }}>
            <Helmet>
                <title>Admin : Home</title>
                <link rel="canonical" href="https://http://localhost:3000/Home" />
            </Helmet>
            <SideNav show={show} setShow={setShow} Name={Name} setName={setName} setComp={setComp}/>
            {
                show && <SideNavModal modalIsOpen={show} Name={Name} setName={setShow} setIsOpen={setShow} setComp={setComp}/>
            }
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: matches ? "100%" : !mobile ? "100%" : '80%',
                backgroundColor: COLORS.layout
            }}>
                <Suspense fallback={<Loading />}>
                   <Comp/>
                </Suspense>
            </div>
        </div>
    )
}
