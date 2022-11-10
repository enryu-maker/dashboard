import React from 'react'

import { COLORS,SIZES,FONTS } from '../Theme/Theme'

export default function TextButton({
    disabled,
    label,
    labelStyle,
    onPress,
    icon,
    iconStyle,
    buttonContainerStyle,
    loading,
    border=true
}) {
    
  return (
      <>
        <button onClick={onPress}
        disabled={disabled}
        style={{
            display:"inline-flex",
            justifyContent: 'center',
            backgroundColor: COLORS.transparentPrimary,
            borderWidth:0,
            height:50,
            alignSelf:'center',
            cursor:"pointer",
            paddingInline:25,
            ...buttonContainerStyle,
        }}
        >
        <p style={{ color: COLORS.white, ...FONTS.body2,alignSelf:"center",letterSpacing:1, ...labelStyle }}>
        {label}
        </p>
        </button>
    </>
  )
}