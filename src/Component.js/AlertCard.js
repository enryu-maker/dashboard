import React from 'react'
import { COLORS } from '../Theme/Theme'


export default function AlertCard({
    msg,
    type
}) {

    return (
        <>
            <div style={{
                color: type ? COLORS.Primary : COLORS.red,
            }}
            >
                {msg}
            </div>
        </>
    )
}