import {Quiz} from '../models/quiz.model';
import {Handicap} from '../models/handicap.models';
import {Histoire_de_France_questions} from "./question-list.mock";

export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Football',
    theme: {name: 'Sport'},
    questions:[]
  },
  {
    id:'2',
    name:"L'Histoire de France",
    theme: {name:'Histoire'},
    questions:Histoire_de_France_questions

  },
  {
    id: '3',
    name:"L' Histoire de l'Europe",
    theme: {name:'Histoire'},
    questions:[],
  },
  {
    id: '4',
    name:"La Grece antique",
    theme: {name:'Histoire'},
    questions:[],

  },
  {
    id:'5',
    name:"Acteurs célèbres",
    theme: {name:'Cinéma'},
    questions:[]

  },
  {
    id:'6',
    name:"Les réalisateurs célèbres",
    theme: {name:'Cinéma'},
    questions:[]
  },
  {
    id:'7',
    name:"Répliques cultes de films",
    theme: {name:'Cinéma'},
    questions:[],
  }
];
