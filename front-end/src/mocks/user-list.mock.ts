import { user } from "src/models/user.models";

export const USER: user[]=[
  {
    lastName: 'Yager',
    firstName: 'Jacob',
    info: "DMLA",
    config:{fontSize:30,lineHeight:27,letterSpacing:5},
    stats: {
      name:'Yager',
      totalPoints: 45,
      statsByTheme: [{themeName: "Histoire", themePoints: 15}],
    },
  },
];
