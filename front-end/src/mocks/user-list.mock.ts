import { User } from "src/models/user.models";

export const USER: User[]=[
  {
    lastName: 'Yager',
    firstName: 'Jacob',
    info: "DMLA",
    config:{font:"Arial Black",fontSize:30,lineHeight:27,letterSpacing:5,contrast:"high"},
    stats: {
      statsByTheme: [{themeName: "Histoire", themePoints: 15},{themeName: "Cinéma",themePoints: 20}],
    },
  },
  {
    lastName: 'Dmla',
    firstName: 'Eric',
    info: "DMLA",
    config:{font:"Arial Black",fontSize:30,lineHeight:27,letterSpacing:5},
    stats: {
      statsByTheme: [{themeName: "Sport", themePoints: 100}],
    },
  },
  {
    lastName: 'Almd',
    firstName: 'Steve',
    info: "DMLA",
    config:{font:"Arial Black",fontSize:30,lineHeight:27,letterSpacing:5},
    stats: {
      statsByTheme: [{themeName: "Histoire", themePoints: 30},{themeName: "Cinéma", themePoints: 35}],
    },
  },

];
