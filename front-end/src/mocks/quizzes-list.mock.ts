import {Quiz} from '../models/quiz.model';
import {Handicap} from '../models/handicap.models';

export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Football',
    theme: {name: 'Sport'}
  },
  {
    id:'2',
    name:"L'Histoire de France",
    theme: {name:'Histoire'}

  },
  {
    id: '3',
    name:"L' Histoire de l'Europe",
    theme: {name:'Histoire'}


  },
  {
    id: '4',
    name:"La Grece antique",
    theme: {name:'Histoire'}

  },
  {
    id:'5',
    name:"Acteurs célèbres",
    theme: {name:'Cinéma'}

  },
  {
    id:'6',
    name:"Les réalisateurs célèbres",
    theme: {name:'Cinéma'}
  },
  {
    id:'7',
    name:"Répliques cultes de films",
    theme: {name:'Cinéma'}
  }
];
