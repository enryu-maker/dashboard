import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { IMAGES } from '../Theme/Image';
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Footer() {
  return (
    <div
      style={{
        position:"fixed",
        left:0,
        bottom:0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: COLORS.white,
        color: COLORS.Primary,
        textAlign: 'center'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingBlock: 20,
      }}>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            ...FONTS.h2,
            color: COLORS.black,
            textAlign: "left",
          }}>
            NerdTech - Consultancy
          </p>
          <p to={'/about_us'} style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2
          }}>
            About Us
          </p>
          <p to={'/contact'} style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Contact Us
          </p>
          
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Terms & Conditions
          </p>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Privacy Policy
          </p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            ...FONTS.h2,
            color: COLORS.black,
            textAlign: "left",
          }}>
            More
          </p>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Blog
          </p>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            FAQ
          </p>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "left",
            textDecorationLine: 'none',
            margin: 2

          }}>
            Carrers
          </p>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p style={{
            ...FONTS.h2,
            color: COLORS.black,
            textAlign: "left",


          }}>
            Product By
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // marginTop:-15
          }}>
            <img src={IMAGES.NT} 
            alt="logo"
            style={{
              height: 30,
              width: 35,
            }} />
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              ...FONTS.h2,
              color: COLORS.Primary,
              alignSelf: "center",
              textAlign: "center",
              backgroundColor: COLORS.transparent,
              borderWidth: 0,
              cursor: "pointer",
              // marginTop:20

            }}
            onClick={() => {
              window.open("https://nerdtech.in/")
            }}
          >
            &nbsp;Nerdtech
          </button>
          </div>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray,
            textAlign: "right",
            marginBlockStart:0,
            paddingLeft:35

          }}>
            Your Partner For Innovations
          </p>
          </div>
      </div>
      <div style={{
        backgroundColor: COLORS.lightGray1,
        width: '90%',
        height: 2,
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '88%',
        // height: "60px",
        alignItems: 'center',
      }}>
        <p style={{
          ...FONTS.body3,
          // marginBlockEnd: 0,
          color: COLORS.gray
        }}>
          Copyright Nerdtech 2022, All rights reserved
        </p>
        <div style={{
          display: 'flex',
          justifyContent:"center",
          alignItems:"center"
        }}>
          <p style={{
            ...FONTS.body3,
            color: COLORS.gray
          }}>
            BACK TO TOP
          </p>
          <button style={{
            height: 38,
            width: 38,
            borderRadius: 19,
            border:'2px solid rgb(230, 230, 230)',
            backgroundColor: COLORS.white,
            color: COLORS.Primary,
            margin: 10
          }}>
            <AiOutlineArrowUp size={18} color={COLORS.Primary} />
          </button>
        </div>
      </div>
    </div >
  )
}