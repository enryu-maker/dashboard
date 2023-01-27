import React from 'react'
import UserCard from '../Component.js/UserCard'
import { COLORS, FONTS } from '../Theme/Theme'

export default function Profile() {
  const a = [1,2,3,4,5,6,7,8,9]
  return (
    <div style={{
      marginTop: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.layout,
      ...FONTS.body2,
      paddingBlockStart: 10,
      paddingBlockEnd: 70
  }}>
    {
      a.map((item,index)=>{
        return(
          <UserCard/>
        )
      })
    }
    </div>
  )
}
