export const COLORS={
    // Primary:"rgb(126,204,122)",
    Primary:"#8c9de3",

    // 0DB44C
    transparentPrimary: "#afbaeb",
    transparentPrimary2: "#d1d8f4",
    white:"#ffffff",
    lightGray1: "#DDDDDD",
    lightGray2: "#e6e6e6",
    black:"black",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: "#CFD0D7",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    transparent: "transparent",
    red: "#ff4d4d",
    green: "#27AE60",
    layout:"#E6E2DD",
    yellow:'#ffdf00'
}
// 8c9de3
// 6586c8
// 7e93c4
// 446eda
// 5077d3
// 6485e8
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    base2: 10,
    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,


};
const type = { base:"Poppins-Regular", 
bold: "Poppins-Medium", 
emphasis:"Poppins-Regular"}
export const FONTS = {
    largeTitle: { fontFamily: type.bold, fontSize: SIZES.largeTitle },
    h1: { fontFamily: type.bold, fontSize: SIZES.h1,},
    h2: { fontFamily: type.bold, fontSize: SIZES.h2,},
    h3: { fontFamily: type.bold, fontSize: SIZES.h3, },
    h4: { fontFamily: type.bold, fontSize: SIZES.h4, },
    h5: { fontFamily: type.bold, fontSize: SIZES.h5, },
    body1: { fontFamily: type.base, fontSize: SIZES.body1,  },
    body2: { fontFamily:type.base, fontSize: SIZES.body2,  },
    body3: { fontFamily:type.base, fontSize: SIZES.body3, },
    body4: { fontFamily:type.base, fontSize: SIZES.body4,  },
    body5: { fontFamily:type.base, fontSize: SIZES.body5,  },
};