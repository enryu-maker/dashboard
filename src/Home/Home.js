import React, { Suspense } from 'react';

import { Helmet } from 'react-helmet-async'
import { COLORS } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import Loading from '../Component.js/Loading';


export const Home = ({
    Comp
}) => {
    const matches = useMediaQuery('(max-width:820px)')
   

    return (
        <div style={{
            display: 'flex',
            flexDirection: matches ? 'column' : 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            width:  '100%',
            height: '100vh',
            backgroundColor: COLORS.white
        }}>
            <Helmet>
                <title>Admin : Home</title>
                <link rel="canonical" href="https://http://localhost:3000/Home" />
            </Helmet>
           
            <div style={{
                height: '100vh',
                overflowY:"scroll",
                width:'100%',
 
                marginTop:matches?60:0,
                
                backgroundColor: COLORS.white,
            }}>

                <Suspense fallback={<Loading />}>
                   <Comp/>
                </Suspense>
            </div>
        </div>
    )
}
