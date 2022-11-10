import React from 'react'
import { COLORS } from '../Theme/Theme'
export const Header = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            backgroundColor: COLORS.transparentPrimary,
            height: 70,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                height: 30,
            }}>
            </div>
        </div>
    )
}
