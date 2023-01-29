import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { TitleCard } from '../Component.js/TitleCard'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import useMediaQuery from '../utils/useMediaQuery'
import { useSelector } from 'react-redux';
import { TbPig } from 'react-icons/tb'
import axiosIns from '../utils/helpers';
import Loading from '../Component.js/Loading';

export default function Animal() {
  const matches = useMediaQuery('(min-width:819px)')
  const mobile = useMediaQuery('(min-width:600px)')
  const Animal = useSelector(state => state.Reducers.animal)
  const [species, setSpecies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  function getSpecies(){
    setLoading(true)
    axiosIns.get("/animalsubspeciescount/").then((res) => {
      setSpecies(res.data)
      setLoading(false)
  }).catch((err) => {
      console.log(err)
      setLoading(false)
  })
  }
  React.useEffect(() => {
    getSpecies()
  }, [])
  const color = [COLORS.transparentPrimary, COLORS.transparentPrimary2, '#FFBB28', '#FF8042',"#F09BB6",'#452063']
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
        loading? <Loading/>
      :
      <>
      <TitleCard
        Icon={TbPig}
        label={"Animals"}
        appendComponent={
          <BarChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={Animal} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
            <Bar dataKey="count" fill={COLORS.Primary} />
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
            <XAxis dataKey="name" />
            <Tooltip />
            <YAxis />
          </BarChart>
        }
      />
      {
        species.map((item, index) => {
          return (
            <TitleCard
              Icon={TbPig}
              label={item.name}
              appendComponent={
                <div style={{
                  display: "flex",
                  flexDirection: !mobile ? "column" : "row"
                }}>
                  <div>
                    <BarChart width={mobile ? !matches ? 700 : 500 : 350} height={400} data={item.d} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }}  >
                      <Bar dataKey="count" fill={COLORS.Primary} />
                      <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <YAxis />
                    </BarChart>
                  </div>
                  <div style={{
                    // height: 2.5,
                    display: "flex",
                    flexDirection: "column",
                    width: "2.5px",
                    backgroundColor: COLORS.lightGray1
                  }} />
                  <div>
                    <PieChart width={mobile ? !matches ? 700 : 500 : 350} height={350}>
                      <Pie
                        labelLine={false}
                        paddingAngle={5}
                        label={renderCustomizedLabel}
                        isAnimationActive={false}
                        data={item.d} dataKey="count" cx="50%" cy="50%" outerRadius={120} innerRadius={60}>
                        {item.d.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={color[index % color.length]} />
                        ))}

                      </Pie>
                      <Legend/>
                      {/* <Tooltip/> */}
                    </PieChart>
                  </div>

                </div>
              }
            />
          )
        }
        )
      }
      </>
      }
    </div>
  )
}
