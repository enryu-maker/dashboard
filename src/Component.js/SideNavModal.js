import React from 'react'
import Modal from 'react-modal';
import useMediaQuery from '../utils/useMediaQuery';
import { COLORS, FONTS, SIZES } from '../Theme/Theme';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import '../CSS/constant.css'
import { IMAGES } from '../Theme/Image';
export const SideNavModal = ({
    setName,
    Name,
    modalIsOpen,
    setIsOpen,
    setComp
}) => {

    const mobile = useMediaQuery('(min-width:860px)')
    let subtitle;
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
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
            style={{
                overlay: {
                    backgroundColor: COLORS.Primary,
                    zIndex: 1000
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: COLORS.Primary,
                    border: 'none',
                    width: mobile ? "50%" : "100%",
                    height: mobile ? "50%" : "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 0,
                    borderRadius: 10
                }
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
                height: 80,
                width: "100%",
            }}>
                <img src={IMAGES.Logo} alt="logo" style={{
                    alignSelf: "center",
                    height: 70,
                    width: "100%",
                    marign:5,
                    backgroundColor: COLORS.transparentPrimary
                }} />
                
                <button className='button'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 70,
                        width: 70,
                        marign:5,
                        backgroundColor: COLORS.transparentPrimary
                    }}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                >
                    <AiOutlineClose size={30} color={COLORS.white} />
                </button>

            </div>
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
                        paddingBlock: 10,
                        
                        borderRadius: SIZES.base,
                        backgroundColor: Name === "Home" ? COLORS.transparentPrimary : COLORS.transparent,
                        width: !mobile ? '60%':'78%',
                        alignSelf: !mobile ?"flex-start":"center",
                        marginLeft: !mobile ?50:0
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
                        color: COLORS.white,
                        ...FONTS.body2,
                        paddingInline: 20,
                        paddingBlock: 5,
                        width: !mobile ? '60%':'78%',
                        alignSelf: !mobile ?"flex-start":"center",
                        marginLeft: !mobile ?50:0,
                        borderRadius: SIZES.base,
                        backgroundColor: Name === "Profile" ? COLORS.transparentPrimary : COLORS.transparent,
                    }}
                    onClick={() => {
                        setComp(React.lazy(() => import("../Comp/Profile")))
                        setName("Profile")
                        setIsOpen(false)
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
                        ...FONTS.body2,
                        paddingInline: 20,
                        paddingBlock: 5,
                        width: !mobile ? '60%':'78%',
                        alignSelf: !mobile ?"flex-start":"center",
                        marginLeft: !mobile ?50:0,
                        borderRadius: SIZES.base,
                        backgroundColor: Name === "Setting" ? COLORS.transparentPrimary : COLORS.transparent,

                    }}
                    onClick={() => {
                        setComp(React.lazy(() => import("../Comp/Settings")))
                        setName("Setting")
                        setIsOpen(false)
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
                        ...FONTS.body2,
                        paddingInline: 20,
                        paddingBlock: 5,
                        width: !mobile ? '60%':'78%',
                        alignSelf: !mobile ?"flex-start":"center",
                        marginLeft: !mobile ?50:0,
                        backgroundColor: Name === "Logout" ? COLORS.transparentPrimary : COLORS.transparent,

                    }}>
                    <AiOutlineLogout color={COLORS.red} />&nbsp;Logout
                </button>
            </div>
        </Modal >
    )
}
