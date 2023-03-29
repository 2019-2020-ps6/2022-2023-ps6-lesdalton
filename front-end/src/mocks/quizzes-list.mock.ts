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
  },
  {
    id:2,
    name:"L'Histoire de France",
    theme: {
      id: 2,
      name: 'Histoire'
    }
  },
  {
    id:3,
    name:"L' Histoire de l'Europe",
    theme: {
      id: 2,
      name: 'Histoire'
    }
  },
  {
    id:4,
    name:"La Grece antique",
    theme: {
      id: 2,
      name: 'Histoire'
    }
  },
  {
    id:5,
    name:"Acteurs célèbres",
    theme: {
      id: 4,
      name: 'Cinéma'
    }
  },
  {
    id:6,
    name:"Les réalisateurs célèbres",
    theme: {
      id: 4,
      name: 'Cinéma'
    }
  },
  {
    id:7,
    name:"Répliques cultes de films",
    theme: {
      id: 4,
      name: 'Cinéma'
    }
  }
];
