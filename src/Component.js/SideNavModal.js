import React from 'react'
import Modal from 'react-modal';
import useMediaQuery from '../utils/useMediaQuery';
import { COLORS, FONTS } from '../Theme/Theme';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { GoIssueOpened } from 'react-icons/go'
import { TbPig } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../Store/actions';
import '../CSS/constant.css'
import { IMAGES } from '../Theme/Image';
export const SideNavModal = ({
    setName,
    Name,
    modalIsOpen,
    setIsOpen,
    setComp
}) => {
    const dispatch = useDispatch()
    const mobile = useMediaQuery('(min-width:860px)')
    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = COLORS.Primary;
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: COLORS.white,
                    zIndex: 1000
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: COLORS.white,
                    border: 'none',
                    width: mobile ? "50%" : "100%",
                    height: mobile ? "50%" : "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 0,
                    // borderRadius: 10
                }
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 60,
                width: "100%",
                backgroundColor: COLORS.Primary,
                // paddingBlock: 2,

            }}>
                <img src={IMAGES.LogoW} alt="logo" style={{
                    alignSelf: "center",
                    height: 70,
                    marginInline: 20,
                    backgroundColor: COLORS.transparent
                }} />

                <button className='button'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginInline: 20,
                        backgroundColor: COLORS.transparent
                    }}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                >
                    <AiOutlineClose size={28} color={COLORS.white} />
                </button>

            </div>
            <div style={{
                display: 'flex',
                // flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',
                width: '100%',
                backgroundColor: COLORS.white,

                // height: '100vh',
            }}>
                <div style={{
                    paddingTop: 20,
                    display: 'flex',
                    flexDirection: "column",
                    // justifyContent: "space-between",
                    // alignItems: 'center',
                    width: '100%',
                    backgroundColor: COLORS.white,

                    // height: '100vh',
                }}>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            ...FONTS.body2,
                            paddingInline: 20,
                            letterSpacing: 2,
                            paddingBlock: 5,
                            color: Name === "Home" ? COLORS.black : COLORS.gray,
                            // borderRadius: SIZES.base,
                            backgroundColor: Name === "Home" ? COLORS.transparentPrimary : COLORS.transparent,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0
                            // ...FONTS.body2
                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Comp/HomeComp")))
                            setName("Home")
                            setIsOpen(false)
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
                            letterSpacing: 2,
                            ...FONTS.body2,
                            paddingInline: 20,
                            paddingBlock: 5,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            color: Name === "Profile" ? COLORS.black : COLORS.gray,
                            marginLeft: !mobile ? 50 : 0,
                            // borderRadius: SIZES.base,
                            backgroundColor: Name === "Profile" ? COLORS.transparentPrimary : COLORS.transparent,
                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Comp/Profile")))
                            setName("Profile")
                            setIsOpen(false)
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

                            ...FONTS.body2,
                            letterSpacing: 2,
                            paddingInline: 20,
                            paddingBlock: 5,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0,
                            // borderRadius: SIZES.base,
                            backgroundColor: Name === "Animal" ? COLORS.transparentPrimary : COLORS.transparent,
                            color: Name === "Animal" ? COLORS.black : COLORS.gray,


                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Comp/Animal")))
                            setName("Animal")
                            setIsOpen(false)
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
                            ...FONTS.body2,
                            letterSpacing: 2,
                            paddingInline: 20,
                            paddingBlock: 5,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0,
                            // borderRadius: SIZES.base,
                            backgroundColor: Name === "Setting" ? COLORS.transparentPrimary : COLORS.transparent,
                            color: Name === "Setting" ? COLORS.black : COLORS.gray,


                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Comp/Settings")))
                            setName("Setting")
                            setIsOpen(false)
                        }}
                    >
                        <AiOutlineSetting />&nbsp;Settings
                    </button>

                </div>
                <div style={{
                    position: "fixed",
                    bottom: 0,
                    paddingBottom: 10,
                    // display: 'flex',
                    width: "100%",
                    // flexDirection: 'column',
                    // justifyContent: "flex-start",
                    // alignItems: "flex-start",
                }}>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            color: Name === "About" ? COLORS.black : COLORS.gray,
                            ...FONTS.body2,
                            paddingInline: 20,
                            paddingBlock: 5,
                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            // borderRadius: SIZES.base,
                            letterSpacing: 2,

                            marginLeft: !mobile ? 50 : 0,
                            backgroundColor: Name === "About" ? COLORS.transparentPrimary : COLORS.transparent,


                        }}
                        onClick={() => {
                            setComp(React.lazy(() => import("../Comp/About")))
                            setName("About")
                            setIsOpen(false)
                        }}
                    >
                        <GoIssueOpened style={{ transform: 'rotate(180deg)' }} />&nbsp;About
                    </button>
                    <button
                        className='button'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            color: COLORS.gray,
                            ...FONTS.body2,
                            paddingInline: 20,
                            paddingBlock: 5,
                            letterSpacing: 2,

                            width: !mobile ? '68%' : '78%',
                            alignSelf: !mobile ? "flex-start" : "center",
                            marginLeft: !mobile ? 50 : 0,
                            backgroundColor: COLORS.transparent,


                        }}
                        onClick={() => {
                            dispatch(Logout())
                            window.location.reload(false)
                        }}
                    >
                        <AiOutlineLogout color={COLORS.red} />&nbsp;Logout
                    </button>

                </div>
            </div>
        </Modal >
    )
}
