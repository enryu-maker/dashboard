import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image'
import useMediaQuery from '../utils/useMediaQuery'
import "../CSS/constant.css"
import { AiOutlineLineChart, AiOutlineSetting, AiOutlineUser, AiOutlineLogout, AiOutlineMenu} from "react-icons/ai";
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
                    position:"fixed",
                    top:0,
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
                    width: 50,
                    height: 50,
                    backgroundColor: COLORS.Primary,
                }}
                onClick={() => {setShow(!show)}}
                >
                <AiOutlineMenu size={28} color={COLORS.white} /> 
                </button>
                <p style={{
                    ...FONTS.body1,
                    color:COLORS.white,
                    marginRight:10
                }}>
                    HerdHelp Admin
                </p>
                </div>
                :
                <div style={{
                        display: 'flex',
                        // flexDirection: 'row',
                        justifyContent: "space-between",
                        // alignItems: 'center',
                        width: '25%',
                        backgroundColor: COLORS.layout,

                        height: '100vh',
                    }}>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        width:"100%",
                        // alignSelf:"center",
                        backgroundColor: COLORS.layout,
                    }}>
                    <img src={IMAGES.Logo} alt="logo" style={{
                            alignSelf: "center",
                            height: 70,
                            width: "100%",
                            marginBlock: 20,
                            backgroundColor: COLORS.layout
                        }} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: "flex-start",
                            width: '100%',
                            marginTop: 20,
                        }}>
                            <button 
                            className='button'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                color: Name==="Home"? COLORS.black : COLORS.gray,
                                ...FONTS.h3,
                                paddingInline: 20,
                                paddingBlock: 10,
                                // borderRadius:SIZES.base,
                                width: '80%',
                                backgroundColor: Name==="Home"?COLORS.transparentPrimary:COLORS.transparent,
                                alignSelf:"center",
                                letterSpacing:2,
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
                                color: Name==="Profile"?COLORS.black:COLORS.gray,
                                ...FONTS.h3,

                                paddingInline: 20,
                                paddingBlock: 10,
                                letterSpacing:2,
                                // borderRadius:SIZES.base,
                                width: '80%',
                                backgroundColor: Name==="Profile"?COLORS.transparentPrimary:COLORS.transparent,
                                alignSelf:"center",

                            }}
                            onClick={() => {
                                setComp(React.lazy(() => import("../Comp/Profile")))
                                setName("Profile")
                            }}
                            >
                                <AiOutlineUser />&nbsp;Profile
                            </button>
                            <button 
                            className='button'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                color: Name==="Setting"? COLORS.black:COLORS.gray,
                                letterSpacing:2,
                                ...FONTS.h3,

                                paddingInline: 20,
                                paddingBlock: 10,
                                // borderRadius:SIZES.base,
                                width: '80%',
                                backgroundColor: Name==="Setting"?COLORS.Primary:COLORS.transparent,
                                alignSelf:"center",

                            }}
                            onClick={() => {
                                setComp(React.lazy(() => import("../Comp/Settings")))
                                setName("Setting")
                            }}
                            >
                                <AiOutlineSetting />&nbsp;Settings
                            </button>
                            <button 
                            className='button'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                color: COLORS.red,
                                ...FONTS.h3,
                                paddingInline: 20,
                                paddingBlock: 10,
                                letterSpacing:2,
                                // borderRadius:SIZES.base,
                                width: '80%',
                                // backgroundColor: Name==="Logout"?COLORS.layout:COLORS.transparent,
                                alignSelf:"center",

                            }}>
                                <AiOutlineLogout color={COLORS.red} />&nbsp;Logout
                            </button>
                            </div>
                            
                        
                        </div>
                        <div style={{
                                height:"100vh",
                                width:2.5,
                                backgroundColor:COLORS.lightGray1
                            }}/>
                        
                    </div>
            }
        </>
    )
}

