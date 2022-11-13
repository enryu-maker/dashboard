import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
export default function MinFooter() {
    const matches = useMediaQuery('(max-width:820px)')

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                display: "flex",
                height: 50,
                width: "100%",
                backgroundColor: matches? COLORS.Primary : COLORS.transparentPrimary,
                justifyContent: "space-between",
            }}
        >

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
            }}>
                <p style={
                    !matches?
                    {


                    paddingInline: 20,
                    paddingBlock: 10,
                    letterSpacing: 2.5,
                    ...FONTS.h4,
                    color:matches? COLORS.white : COLORS.black
                }:
                {
                    paddingInline: 20,
                    paddingBlock: 10,
                    letterSpacing: 0.6,
                    ...FONTS.body4,
                    color:matches? COLORS.white : COLORS.black

                }
            }>
                    Copyright NerdTech 2022, All rights reserved
                </p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
            }}>{
                    matches ? <></> :
                        <>
                            <p style={{


                                paddingInline: 20,
                                paddingBlock: 5,
                                ...FONTS.h4,
                                color:matches? COLORS.white : COLORS.black,

                                letterSpacing: 2.5,

                            }}>
                                Report a Problem?
                            </p>
                            <p style={{


                                paddingInline: 20,
                                paddingBlock: 5,
                                ...FONTS.h4,
                                color:matches? COLORS.white : COLORS.black,
                                letterSpacing: 2.5,

                            }}>
                                Contact Us
                            </p>
                        </>
                }
            </div>
        </div>
    )
}
