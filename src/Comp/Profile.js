import React from 'react'
import Loading from '../Component.js/Loading'
import UserCard from '../Component.js/UserCard'
import { COLORS, FONTS } from '../Theme/Theme'
import axiosIns from '../utils/helpers'
import useMediaQuery from '../utils/useMediaQuery'

export default function Profile() {
  const matches = useMediaQuery('(min-width:819px)')
  const mobile = useMediaQuery('(min-width:600px)')
  const [user, setUser] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  function getUser() {
    setLoading(true)
    axiosIns.get("/userlistdetail/").then((res) => {
      console.log(res.data)
      setUser(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }
  React.useEffect(() => {
    getUser()
  }, [])
  return (
    <div style={{
      marginTop: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: COLORS.layout,
      ...FONTS.body2,
      paddingBlockStart: 10,
      paddingBlockEnd: 70
    }}>
      {
        mobile?
      
      <button
        className='button'
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 50,
          width: mobile ? !matches ? 700 : 1000 : 350,
          margin: 10,
          backgroundColor: COLORS.white,
          borderRadius: 3,
          alignSelf: "center",
        }}
      >
        <p style={{
          ...FONTS.h3,
          textAlign: "start",
          width: 100,

        }}>
          Username
        </p>
        <p style={{
          ...FONTS.h3,
          textAlign: "start",

          width: 300,


        }}>
          Email
        </p>
        <p style={{
          ...FONTS.h3,
          textAlign: "start",

          width: 150,


        }}>
          Phone
        </p>
        <p style={{
          ...FONTS.h3,
          textAlign: "start",

          width: 120,

        }}>
          Device
        </p>
        <p style={{
          ...FONTS.h3,
          width: 120,


        }}>
          Subscription
        </p>
      </button>
      :
      null
}
      {
        loading ? <Loading />
          :
          <>
            {
              user.map((item, index) => {
                return (
                  <UserCard item={item} onPress={()=>{
                    alert(index)}}/>
                )
              })
            }
          </>
      }
    </div>
  )
}
