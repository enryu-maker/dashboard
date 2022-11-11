import React from 'react'
import { COLORS,FONTS, SIZES } from '../Theme/Theme'
import '../CSS/constant.css'
import useMediaQuery from '../utils/useMediaQuery'
export const TitleCard = ({
    container,
    label,
    Icon,
    appendComponent,
    onPress
}) => {
  const matches = useMediaQuery('(min-width:819px)')
  const mobile = useMediaQuery('(min-width:600px)')
  console.log(mobile ? !matches ? 700 : 900 : 350)

  return (
    <button 
    className='button'
    style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
        // height:"150px",
        width:mobile ? !matches ? 700 : 1000 : 350,
        margin:5,
        backgroundColor:COLORS.transparentPrimary,
        alignSelf:"center",
        ...container
      }}
      onClick={onPress}
      >
        <p style={{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            alignSelf:"flex-start",
            paddingInline:20,
            paddingBlock:5,
            ...FONTS.body2,
            color:COLORS.white
        }}>
           <Icon size={26} color={COLORS.white} />&nbsp;{label}
        </p>
        
        {appendComponent}
      </button>
  )
}
