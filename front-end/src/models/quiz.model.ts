import {Theme} from "./theme.models";
import {Question} from "./question.model";

export interface Quiz {
  id?: string;
  name:string;
  theme?:string;
  theme:Theme;
  question?:Question[];

}
