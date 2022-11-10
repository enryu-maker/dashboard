import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image'
import useMediaQuery from '../utils/useMediaQuery'
import "../CSS/constant.css"
import { SideNavModal } from './SideNavModal'
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser, AiOutlineLogout, AiOutlineMenu} from "react-icons/ai";
export default function SideNav({
    show,
    setShow,
    setComp,
    setName,
    Name
}) {
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:600px)')
    return (
        <>
            {
                matches ? 
                <div style={{
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
                </div>
                :<div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        width: '20%',
                        backgroundColor: COLORS.Primary,
                        height: '100vh',
                    }}>
                        <img src={IMAGES.Logo} style={{
                            alignSelf: "center",
                            height: 70,
                            width: "100%",
                            // paddingBlock: 20,
                            backgroundColor: COLORS.transparentPrimary
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
                                color: COLORS.white,
                                ...FONTS.body2,
                                paddingInline: 20,
                                paddingBlock: 5,
                                borderRadius:SIZES.base,
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
                                <AiOutlineHome />&nbsp;Dashboard
                            </button>
                            <button 
                            className='button'
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                color: COLORS.white,
                                ...FONTS.body2,
                                paddingInline: 20,
                                paddingBlock: 5,
                                letterSpacing:2,
                                borderRadius:SIZES.base,
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
                                color: COLORS.white,
                                letterSpacing:2,
                                ...FONTS.body2,
                                paddingInline: 20,
                                paddingBlock: 5,
                                borderRadius:SIZES.base,
                                width: '80%',
                                backgroundColor: Name==="Setting"?COLORS.transparentPrimary:COLORS.transparent,
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
                                color: COLORS.white,
                                ...FONTS.body2,
                                paddingInline: 20,
                                paddingBlock: 5,
                                letterSpacing:2,
                                borderRadius:SIZES.base,
                                width: '80%',
                                backgroundColor: Name==="Logout"?COLORS.layout:COLORS.transparent,
                                alignSelf:"center",

                            }}>
                                <AiOutlineLogout color={COLORS.red} />&nbsp;Logout
                            </button>
                        </div>
                    </div>
            }
        </>
    )
}

