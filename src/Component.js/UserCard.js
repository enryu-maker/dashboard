import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import '../CSS/constant.css'

export default function UserCard({
    container,
    item,

    onPress
}) {
    const matches = useMediaQuery('(min-width:819px)')
    const mobile = useMediaQuery('(min-width:600px)')
    return (
        <button
            className='button'
            style={{
                display: "flex",
                flexDirection: !mobile?"column":"row",
                justifyContent: mobile?"space-evenly":"flex-start",
                // justifyContent: "start",
                alignItems: "center",
                // height: 50,
                width: mobile ? !matches ? 700 : 1000 : 350,
                margin: 5,
                backgroundColor: COLORS.white,
                borderRadius: 3,
                alignSelf: mobile?"center":"flex-start",
                padding: 10,
                ...container
            }}
            onClick={onPress}
        >
            <p style={{
                ...FONTS.h4,
                textAlign: "start",
                marginLeft: 10,
                width:!mobile? 300: 100,
            }}>
                {mobile?item.name:`Name: ${item.name}`}
            </p>
            <p style={{
                ...FONTS.h4,
                textAlign: "start",
                marginLeft: 10,
                width: 300,

            }}>
                {mobile?item.email:`Email: ${item.email}`}
            </p>
            <p style={{
                ...FONTS.h4,
                textAlign: "start",
                marginLeft: 10,
                width:!mobile? 300: 150,
            }}>
                {mobile?item.phone === "" ? "Not Available" : item.phone:`Phone: ${item.phone === "" ? "Not Available" : item.phone}`}
            </p>
            <p style={{
                alignSelf: "center",
                ...FONTS.h4,
                textAlign: "start",
                marginLeft: 10,
                width:!mobile? 300: 120,
            }}>
                {mobile?item.device_type:`Device: ${item.device_type}`}
            </p>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: !mobile?"flex-start":"center",
                width:!mobile? 300: 120,
                marginLeft: 10,
            }}>
                {
                    !mobile?
                
                <p style={{
                alignSelf: "center",
                ...FONTS.h4,
                textAlign: "start",
                // width:!mobile? 300: 120,
            }}>
                Subscription:
            </p>
            :null
            }
            {
                item.is_active ? <div style={{
                    ...FONTS.h3,
                    backgroundColor: COLORS.green,
                    height:20,
                    width: 20,
                    borderRadius: 15,
                    marginLeft: !mobile? 10: 0,

                }} />
                    : <div style={{
                        ...FONTS.h3,
                        backgroundColor: COLORS.red,
                        height:20,
                        width:20,
                        borderRadius: 15,
                        marginLeft: !mobile? 10: 0,



                    }} />
            }
            </div>
        </button>
    )
}
