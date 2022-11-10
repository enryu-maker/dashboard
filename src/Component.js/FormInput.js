import React from "react";
import { COLORS, SIZES, FONTS } from "../Theme/Theme";
import useMediaQuery from "../utils/useMediaQuery";
export default function InputForm({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg,
    maxLength,
    keytype = "",
    onPressIn,
    type,
}) {

    const matches = useMediaQuery('(max-width:820px)')
    const mobile = useMediaQuery('(min-width:600px)') 
    return (
        <>
            <div
                style={{
                    ...containerStyle,
                    justifyContent: "center",
                    alignSelf: "center",
                    display: "flex",
                    flexFlow: "column",
                    marginBottom: 30,
                    borderWidth: 0,
                    borderBottomWidth: 12,
                    width:"100%"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        display: "flex",
                        flexFlow: "row",
                        alignSelf: "center",
                        height: 20,
                    }}
                >
                    <text style={{ color: COLORS.white, ...FONTS.h3 }}>{label}</text>
                </div>
                <div
                    style={{
                        display: "inline-flex",
                        flexFlow: "row",
                        height: 48,
                        paddingHorizontal: SIZES.padding,
                        marginTop: 5,
                        backgroundColor: COLORS.white,
                        width: !mobile?"88%":matches?"58%":"400px",
                        alignSelf: "center",
                        ...inputContainerStyle,
                    }}>

                    {prependComponent}
                    <input
                        style={{
                            flex: 1,
                            ...inputStyle,
                            width: "100%",
                            backgroundColor: COLORS.white,
                            borderRadius: 'none',
                            background: 'none',
                            borderTop: 'none',
                            borderInline: 'none',
                            border:0,
                            // borderBottom: '0.9px solid #009A48',
                            height: 45,
                            alignSelf: "center",
                            paddingLeft: 20,
                            ...FONTS.body3,
                            outline: "none"

                            // outline: "none",
                        }}
                        value={value}
                        placeholder={placeholder}
                        color={COLORS.black}
                        type={type}
                        onChange={onChange}
                    />
                    {appendComponent}
                </div>
            </div>
        </>
    );
}