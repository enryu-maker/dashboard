import React from 'react'
import { TitleCard } from '../Component.js/TitleCard'
import { COLORS, FONTS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import { AiOutlineHeart,AiOutlineHome, AiOutlineSetting, AiOutlineUser, AiOutlineLogout, AiOutlineMenu} from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer, Bar, BarChart } from 'recharts';
export default function HomeComp() {
  const matches = useMediaQuery('(min-width:819px)')
  const mobile = useMediaQuery('(min-width:600px)')
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: COLORS.transparentPrimary2,
                ...FONTS.h3,
                padding: "1px"
            }}>
                <p className="label">{`${label} : ${payload[0].value} ${"Student"}`}</p>
            </div>
        );
    }

    return null;
};
console.log(mobile ? matches ? 700 : 900 : 350)
const pdata = [
  {
      name: 'MongoDb',
      student: 11,
      fees: 120
  },
  {
      name: 'Javascript',
      student: 15,
      fees: 12
  },
  {
      name: 'PHP',
      student: 5,
      fees: 10
  },
  {
      name: 'Java',
      student: 10,
      fees: 5
  },
  {
      name: 'C#',
      student: 9,
      fees: 4
  },
  {
      name: 'C++',
      student: 10,
      fees: 8
  },
  {
    name: 'Python',
    student: 50,
    fees: 5
},
];
  return (
    
      <div style={{
        marginTop:0,
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:COLORS.layout,
        ...FONTS.body2,
      }}>

        <TitleCard
        Icon={AiOutlineUser}
        label={"Active Users"}
        onPress={()=>{
          // alert("Active User")
        }}
        appendComponent={
          <LineChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={pdata} margin={{ top: 25, right: 30, bottom: 50, left: -15 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"name"} angle={matches? 0 : -270} tickMargin={matches? 10 : 30} style={{
                            ...FONTS.h4,
                            backgroundColor:COLORS.Primary
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4,
                              
                            }}
                        /> 
                            
                        <Tooltip content={<CustomTooltip />} />
                         {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2} />
                    </LineChart>
        }
        />
        <TitleCard
        Icon={AiOutlineUser}
        label={"New Users"}
        onPress={()=>{
          // alert("Active User")
        }}
        appendComponent={
          <div style={{
            display:"flex",
            flexDirection:!mobile?"column":"row"
          }}>
           
          <LineChart width={mobile ? !matches ? 700 : 500 : 350} height={400} data={pdata} margin={{ top: 25, right: 30, bottom: 50, left: -15 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"name"} angle={matches? 0 : -270} tickMargin={matches? 10 : 30} style={{

                            ...FONTS.h4,
                            backgroundColor:COLORS.Primary
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4,
                              
                            }}
                        /> 
                            
                        <Tooltip content={<CustomTooltip />} />
                         {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2} />
                    </LineChart>
                    <LineChart width={mobile ? !matches ? 700 : 500 : 350} height={400} data={pdata} margin={{ top: 25, right: 30, bottom: 50, left: -15 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"name"} angle={matches? 0 : -270} tickMargin={matches? 10 : 30} style={{

                            ...FONTS.h4,
                            backgroundColor:COLORS.Primary
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4,
                              
                            }}
                        /> 
                            
                        <Tooltip content={<CustomTooltip />} />
                         {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2} />
                    </LineChart>
                    </div>
        }
        />
        <TitleCard
        Icon={AiOutlineUser}
        label={"Animals"}
        onPress={()=>{
          // alert("Active User")
        }}
        appendComponent={
          <LineChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={pdata} margin={{ top: 25, right: 30, bottom: 50, left: -15 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"name"} angle={matches? 0 : -270} tickMargin={matches? 10 : 30} style={{
                            ...FONTS.h4,
                            backgroundColor:COLORS.Primary
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4,
                              
                            }}
                        /> 
                            
                        <Tooltip content={<CustomTooltip />} />
                         {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2} />
                    </LineChart>
        }
        />
        
      </div>
      
    
  )
}

