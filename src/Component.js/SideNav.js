import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image'
import useMediaQuery from '../utils/useMediaQuery'
import "../CSS/constant.css"
import { AiOutlineLineChart, AiOutlineSetting, AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { GoIssueOpened } from 'react-icons/go'
import { TbPig } from 'react-icons/tb'


export default function SideNav({
    show,
    setShow,
    setComp,
    setName,
    Name
}) {
    const matches = useMediaQuery('(max-width:820px)')
    // const mobile = useMediaQuery('(min-width:600px)')
    return (
        <>
            {
                matches ?

                    <div style={{
                        position: "fixed",
                        top: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: COLORS.Primary,
                        height: 60,


                    }}>
                        <button className='button' style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            

                            marginInline: 20,

                            backgroundColor: COLORS.Primary,
                        }}
                            onClick={() => { setShow(!show) }}
                        >
                            <AiOutlineMenu size={28} color={COLORS.white} />
                        </button>
                        <img src={IMAGES.admin} alt="logo" style={{
                            alignSelf: "center",
                            height: 45,
                            // width: "100%",
                            marginInline: 20,
                            // backgroundColor: COLORS.white
                        }} />
                        {/* <p style={{
                    ...FONTS.body1,
                    color:COLORS.white,
                    marginRight:10
                }}>
                    HerdHelp Admin
                </p> */}
                    </div>
                    :
                    <div style={{
                        display: 'flex',
                        // flexDirection: 'row',
                        justifyContent: "space-between",
                        // alignItems: 'center',
                        width: '25%',
                        backgroundColor: COLORS.white,

                        height: '100vh',
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            // alignSelf:"center",
                            backgroundColor: COLORS.white,
                        }}>
                            <img src={IMAGES.Logo} alt="logo" style={{
                                alignSelf: "center",
                                height: 70,
                                width: "100%",
                                marginBlock: 20,
                                backgroundColor: COLORS.white
                            }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                width: '100%',
                                marginTop: 20,
                            }}>
                                <>
                                    <button
                                        className='button'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            color: Name === "Home" ? COLORS.black : COLORS.gray,
                                            ...FONTS.h3,
                                            paddingInline: 20,
                                            paddingBlock: 10,
                                            // borderRadius:SIZES.base,
                                            width: '80%',
                                            backgroundColor: Name === "Home" ? COLORS.transparentPrimary : COLORS.transparent,
                                            alignSelf: "center",
                                            letterSpacing: 2.5,

                                            // ...FONTS.body2
                                        }}
                                        onClick={() => {
                                            setComp(React.lazy(() => import("../Comp/HomeComp")))
                                            setName("Home")
                                        }}
                                    >
                                        <AiOutlineLineChart />&nbsp;Dashboard
                                    </button>
                                    <button
                                        className='button'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            color: Name === "Profile" ? COLORS.black : COLORS.gray,
                                            ...FONTS.h3,

                                            paddingInline: 20,
                                            paddingBlock: 10,
                                            letterSpacing: 2.5,

                                            // borderRadius:SIZES.base,
                                            width: '80%',
                                            backgroundColor: Name === "Profile" ? COLORS.transparentPrimary : COLORS.transparent,
                                            alignSelf: "center",

                                        }}
                                        onClick={() => {
                                            setComp(React.lazy(() => import("../Comp/Profile")))
                                            setName("Profile")
                                        }}
                                    >
                                        <AiOutlineUser />&nbsp;Users
                                    </button>
                                    <button
                                        className='button'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            color: Name === "Profile" ? COLORS.black : COLORS.gray,
                                            ...FONTS.h3,

                                            paddingInline: 20,
                                            paddingBlock: 10,
                                            letterSpacing: 2.5,

                                            // borderRadius:SIZES.base,
                                            width: '80%',
                                            backgroundColor: Name === "Profile" ? COLORS.transparentPrimary : COLORS.transparent,
                                            alignSelf: "center",


                                        }}
                                        onClick={() => {
                                            setComp(React.lazy(() => import("../Comp/Settings")))
                                            setName("Setting")
                                        }}
                                    >
                                        <TbPig />&nbsp;Animals
                                    </button>
                                    <button
                                        className='button'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            color: Name === "Setting" ? COLORS.black : COLORS.gray,
                                            letterSpacing: 2.5,

                                            ...FONTS.h3,

                                            paddingInline: 20,
                                            paddingBlock: 10,
                                            // borderRadius:SIZES.base,
                                            width: '80%',
                                            backgroundColor: Name === "Setting" ? COLORS.transparentPrimary : COLORS.transparent,
                                            alignSelf: "center",

                                        }}
                                        onClick={() => {
                                            setComp(React.lazy(() => import("../Comp/Settings")))
                                            setName("Setting")
                                        }}
                                    >
                                        <AiOutlineSetting />&nbsp;Settings
                                    </button>
                                </>
                                <div style={{
                                    position: "fixed",
                                    bottom: 0,
                                    paddingBottom: 60,
                                    display: 'flex',
                                    width: "20%",
                                    flexDirection: 'column',
                                    // justifyContent: 'center',
                                    // alignItems: "flex-start",
                                }}>
                                    <button
                                        className='button'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            color: COLORS.gray,
                                            ...FONTS.body3,
                                            paddingInline: 20,
                                            paddingBlock: 10,
                                            letterSpacing: 2.5,
                                            // borderRadius:SIZES.base,
                                            width: '80%',
                                            backgroundColor: Name === "About" ? COLORS.layout : COLORS.transparent,
                                            alignSelf: "center",

                                        }}>
                                        <GoIssueOpened color={COLORS.gray} style={{ transform: 'rotate(180deg)' }} />&nbsp;About
                                    </button>
                                    <button
                                        className='button'
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            color: COLORS.gray,
                                            ...FONTS.body3,
                                            paddingInline: 20,
                                            paddingBlock: 10,
                                            letterSpacing: 2.5,

                                            // borderRadius:SIZES.base,
                                            width: '80%',
                                            // backgroundColor: Name==="Logout"?COLORS.layout:COLORS.transparent,
                                            alignSelf: "center",

                                        }}>
                                        <AiOutlineLogout color={COLORS.red} />&nbsp;Logout
                                    </button>

                                </div>
                            </div>


                        </div>
                        <div style={{
                            height: "100vh",
                            width: 2.5,
                            backgroundColor: COLORS.lightGray1
                        }} />

                    </div>
            }
        </>
    )
}

