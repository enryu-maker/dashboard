import React from 'react'
import InputForm from '../Component.js/FormInput'
import TextButton from '../Component.js/TextButton'
import { COLORS, FONTS, SIZES } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import { IMAGES } from '../Theme/Image'
import { Helmet } from 'react-helmet-async';
import Footer from '../Component.js/Footer'

export const Login = () => {
    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:600px)')
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [check, setCheck] = React.useState(false)


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.Primary,

        }} >
            <Helmet>
                <title>Admin : Login</title>
                <link rel="canonical" href="https://http://localhost:3000/login" />
            </Helmet>
            <img src={IMAGES.Logo} style={{
                alignSelf: "center",
                height: 80,
                width: !mobile ? "88%" : matches ? "58%" : "400px",
                paddingBlock:20
            }} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: '100%',
                height: !mobile ? "50%" : matches ? "40%" : "400px",
                justifyContent: "space-evenly",
                paddingBottom:!mobile?null:250

            }}>
                <InputForm
                    value={email}
                    label={"E-Mail"}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <InputForm
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    label={"Password"}
                    type={"password"}
                />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: !mobile ? "88%" : matches ? "58%" : "400px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignSelf: "center"

                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <button style={{
                            height: 18,
                            width: 18,
                            backgroundColor: check ? COLORS.transparentPrimary : COLORS.white,
                            borderWidth: 1.5,
                            borderColor: COLORS.white,
                            borderStyle: "solid"
                            // margin:check?5:0,
                        }}
                            onClick={() => {
                                setCheck(!check)
                            }}
                        />
                        <p style={{
                            ...FONTS.h3,
                            color: COLORS.white
                        }}>&nbsp;Remember me</p>
                    </div>
                    <p style={{
                        ...FONTS.h3,
                        color: COLORS.white
                    }}>Forget Password?</p>
                </div>

                <TextButton label={"SIGN IN"} />

            </div>
            {
                !mobile?null:<Footer/>
            }
        </div>
    )
}
