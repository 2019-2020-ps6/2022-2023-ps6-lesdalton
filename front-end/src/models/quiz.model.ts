import {Theme} from "./theme.models";
import {Question} from "./question.model";

export interface Quiz {
  id?: number;
  name:string;
  theme?:Theme;

}
