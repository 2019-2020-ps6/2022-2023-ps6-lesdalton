import {Quiz} from '../models/quiz.model';
import {Handicap} from '../models/handicap.models';

export const QuizzesMocks: Quiz[] = [
  {
    id: 1,
    name: 'football',
    theme: {
      id: 1,
      name: 'SPORT'
    }
  }


  {
    id:2,
    name:"L'Histoire de France",
    theme:"Histoire",
  },
  {
    id:3,
    name:"L' Histoire de l'Europe",
    theme:"Histoire",
  },
  {
    id:4,
    name:"La Grece antique",
    theme:"Histoire",
  },
  {
    id:5,
    name:"Acteurs célèbres",
    theme:"Cinéma",
  },
  {
    id:6,
    name:"Les réalisateurs célèbres",
    theme:"Cinéma",
  },
  {
    id:7,
    name:"Répliques cultes de films",
    theme:"Cinéma",
  }
];
