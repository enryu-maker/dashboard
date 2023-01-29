import React from 'react'
import { TitleCard } from '../Component.js/TitleCard'
import { COLORS, FONTS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import { AiOutlineUser, AiOutlineMobile } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { TbPig } from 'react-icons/tb'
import axiosIns from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { getAnimals } from '../Store/actions';
import Loading from '../Component.js/Loading';

export default function HomeComp() {
    const [Animal, setAnimal] = React.useState([])
    const [User, setUser] = React.useState([])
    const [Wuser, setWuser] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    
    const dispatch = useDispatch()
    function getAnimal() {
        setLoading(true)
        var animal = []
        axiosIns.get("/animalcount/").then((res) => {
            Object.entries(res.data).forEach(([k, v]) => {
                animal.push({
                    'name': k,
                    'count': v
                })
            })
            dispatch(getAnimals(animal))
            setAnimal(animal)
            setLoading(false)

        })

    }
    function getUser() {
        axiosIns.get("/getusersmonthly/").then((res) => {
            setUser(res.data)
        }).catch((err) => {
            console.log(err)
            setLoading(false)

        })
    }
    function getWeek() {
        axiosIns.get("/weeklysubscribedusers/").then((res) => {
            setWuser(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)

        })
    }

    React.useEffect(() => {
        getUser()
        getAnimal()
        getWeek()
    }, [])


    const matches = useMediaQuery('(min-width:819px)')
    const mobile = useMediaQuery('(min-width:600px)')
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: COLORS.transparentPrimary2,
                    ...FONTS.h3,
                    padding: "2px",
                    borderRadius: "2px"
                }}>
                    <p className="label">{`${label} : ${payload[0].value} ${"User"}`}</p>
                </div>
            );
        }

        return null;
    };


   
    const pieData = [
        { name: 'Android', value: 300 },
        { name: 'IOS', value: 300 },
    ]
    const color = [COLORS.transparentPrimary, COLORS.transparentPrimary2, '#FFBB28', '#FF8042']
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                style={{
                    ...FONTS.h3,
                }}
                x={x - 15} y={y} fill={COLORS.black} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${name} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
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
                loading ? <Loading /> :
                    <>
                        <TitleCard
                            Icon={AiOutlineUser}
                            label={"Active Users"}
                            onPress={() => {
                                // alert("Active User")
                            }}
                            appendComponent={
                                <LineChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={User} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                                    <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                                    <XAxis dataKey={"date"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{
                                        ...FONTS.h4,
                                        backgroundColor: COLORS.Primary
                                    }}
                                    />
                                    <YAxis
                                        style={{
                                            ...FONTS.h4,

                                        }}
                                    />

                                    <Tooltip content={<CustomTooltip />} />
                                    {/* <Legend/> */}
                                    <Line type="monotoneX" dataKey="count" stroke={COLORS.Primary} strokeWidth={2}
                                        dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                                    />
                                </LineChart>
                            }
                        />
                        <TitleCard
                            // Icon={AiOutlineUser}
                            // label={"New Users"}
                            onPress={() => {
                                // alert("Active User")
                            }}
                            appendComponent={
                                <div style={{
                                    display: "flex",
                                    // alignItems:"center",
                                    flexDirection: !mobile ? "column" : "row"
                                }}>
                                    <div>
                                        <p style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            alignSelf: "flex-start",
                                            paddingInline: 20,
                                            paddingBlock: 5,
                                            ...FONTS.body2,
                                            color: COLORS.gray
                                        }}>
                                            <AiOutlineUser size={26} color={COLORS.gray} />&nbsp;{"Weekly Users"}
                                        </p>
                                        <LineChart width={mobile ? !matches ? 700 : 500 : 350} height={400} data={Wuser} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                                            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                                            <XAxis dataKey={"day"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{

                                                ...FONTS.h4,
                                                backgroundColor: COLORS.Primary
                                            }}
                                            />
                                            <YAxis
                                                style={{
                                                    ...FONTS.h4,

                                                }}
                                            />

                                            <Tooltip content={<CustomTooltip />} />
                                            {/* <Legend/> */}
                                            <Line type="monotoneX" dataKey="count" stroke={COLORS.Primary} strokeWidth={2}
                                                dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                                            />
                                        </LineChart>
                                    </div>

                                    <div style={{
                                        // height: 2.5,
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "2.5px",
                                        backgroundColor: COLORS.lightGray1
                                    }} />
                                    <div>
                                        <p style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            alignSelf: "flex-start",
                                            paddingInline: 20,
                                            paddingBlock: 5,
                                            ...FONTS.body2,
                                            color: COLORS.gray
                                        }}>
                                            <AiOutlineMobile size={26} color={COLORS.gray} />&nbsp;{"User Device"}
                                        </p>
                                        <PieChart width={mobile ? !matches ? 700 : 500 : 350} height={350}>
                                            <Pie
                                                labelLine={false}
                                                paddingAngle={5}
                                                label={renderCustomizedLabel}
                                                isAnimationActive={false}
                                                data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={120} innerRadius={60}>
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={color[index % color.length]} />
                                                ))}
                                            </Pie>
                                            {/* <Tooltip/> */}
                                        </PieChart>
                                    </div>
                                    {/* </ResponsiveContainer> */}


                                </div>
                            }
                        />
                        <TitleCard
                            Icon={TbPig}
                            label={"Animals"}
                            onPress={() => {
                                // alert("Active User")
                            }}
                            appendComponent={
                                <LineChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={Animal} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                                    <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                                    <XAxis dataKey={"name"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{
                                        ...FONTS.h4,
                                        backgroundColor: COLORS.Primary
                                    }}
                                    />
                                    <YAxis
                                        style={{
                                            ...FONTS.h4,

                                        }}
                                    />

                                    <Tooltip content={<CustomTooltip />} />
                                    {/* <Legend/> */}
                                    <Line type="monotoneX" dataKey="count" stroke={COLORS.Primary} strokeWidth={2}
                                        dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                                    />
                                </LineChart>
                            }
                        />
                    </>
            }
        </div>


    )
}

