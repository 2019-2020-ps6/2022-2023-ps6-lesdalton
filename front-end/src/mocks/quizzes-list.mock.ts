import {Quiz} from '../models/quiz.model';
import {Handicap} from '../models/handicap.models';
import {QUESTION_LIST} from "./question-list.mock";

export const QUIZ_LIST: Quiz[] = [
  {
    id: "1",
    name: 'Football',
    theme: {
      id: 1,
      name: 'Sport'
    },
    question: QUESTION_LIST,
  },
  {
    id: "2",
    name: 'Histoire de France',
    theme: {
      id: 1,
      name: 'Histoire'
    }
  }

];
