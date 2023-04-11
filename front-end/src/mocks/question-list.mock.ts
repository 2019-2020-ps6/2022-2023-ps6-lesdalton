import {Question} from "../models/question.model";
//import {ANSWER_LIST} from "./answer-list.mock";


export const Histoire_de_France_questions: Question[]=[
  {
    id:1,
    text:'Quel peuple investit le territoire français au 7eme siecle avant J.C',
    answers: [
      {
        id :1,
        text:'Les Celtes',
        isCorrect: true,
        questionId:1
      },
      {
        id:2,
        text:'Les Romains',
        isCorrect: false,
        questionId:1
      },
      {
        id:3,
        text:'Les Grecs',
        isCorrect: false,
        questionId:1
      },
      {
        id:4,
        text:'Les Gaulois',
        isCorrect: false,
        questionId:1
      }
    ],
    quizId:2,
  },
  {
    id: 2,
    text: 'Quel est le nom de la bataille qui a vu la défaite de Napoléon en 1815 ?',
    answers: [
      {
        id: 5,
        text: 'Bataille de Borodino',
        isCorrect: false,
        questionId: 2,
      },
      {
        id: 6,
        text: 'Bataille de Leipzig',
        isCorrect: false,
        questionId: 2,
      },
      {
        id: 7,
        text: 'Bataille de Waterloo',
        isCorrect: true,
        questionId: 2,
      },
      {
        id: 8,
        text: 'Bataille d\'Austerlitz',
        isCorrect: false,
        questionId: 2,
      }
    ],
    quizId:2,
  },
  {
    id: 3,
    text: 'Qui a été le premier roi de France ?',
    answers: [
      {
        id: 9,
        text: 'Clovis Ier',
        isCorrect: true,
        questionId: 3,
      },
      {
        id: 10,
        text: 'Charlemagne',
        isCorrect: false,
        questionId: 3,
      },
      {
        id: 11,
        text: 'Louis XIV',
        isCorrect: false,
        questionId: 3,
      },
      {
        id: 12,
        text: 'Philippe Auguste',
        isCorrect: false,
        questionId: 3,
      }
    ],
    quizId:2,
  },
  {
    id: 4,
    text: 'En quelle année a eu lieu la prise de la Bastille ?',
    answers: [
      {
        id: 13,
        text: '1789',
        isCorrect: true,
        questionId: 4,
      },
      {
        id: 14,
        text: '1792',
        isCorrect: false,
        questionId: 4,
      },
      {
        id: 15,
        text: '1798',
        isCorrect: false,
        questionId: 4,
      },
      {
        id: 16,
        text: '1804',
        isCorrect: false,
        questionId: 4,
      }
    ],
    quizId:2,
  }
];

