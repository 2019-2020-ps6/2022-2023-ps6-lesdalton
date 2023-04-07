import {Quiz} from '../models/quiz.model';
import {Handicap} from '../models/handicap.models';
import {QUESTION_LIST} from "./question-list.mock";

export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Football',
    theme: {name: 'Sport'},
    question: QUESTION_LIST
  },
  {
    id:'2',
    name:"L'Histoire de France",
    theme: {name:'Histoire'},
    question: QUESTION_LIST

  },
  {
    id: '3',
    name:"L' Histoire de l'Europe",
    theme: {name:'Histoire'},
    question: QUESTION_LIST


  },
  {
    id: '4',
    name:"La Grece antique",
    theme: {name:'Histoire'},
    question: QUESTION_LIST

  },
  {
    id:'5',
    name:"Acteurs célèbres",
    theme: {name:'Cinéma'},
    question: QUESTION_LIST

  },
  {
    id:'6',
    name:"Les réalisateurs célèbres",
    theme: {name:'Cinéma'},
    question: QUESTION_LIST
  },
  {
    id:'7',
    name:"Répliques cultes de films",
    theme: {name:'Cinéma'},
    question: QUESTION_LIST
  }
];
