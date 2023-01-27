import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import '../CSS/constant.css'

export default function UserCard({
    container,
    label,
    Icon,
    appendComponent,
    onPress
}) {
    const matches = useMediaQuery('(min-width:819px)')
    const mobile = useMediaQuery('(min-width:600px)')
    return (
        <button
            className='button'
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: 150,
                width: mobile ? !matches ? 700 : 1000 : 350,
                margin: 10,
                backgroundColor: COLORS.white,
                borderRadius: 3,
                alignSelf: "center",
                ...container
            }}
            onClick={onPress}
        >

        </button>
    )
}
