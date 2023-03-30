import {Theme} from "./theme.models";
import {Question} from "./question.model";

export interface Quiz {
  id?: string;
  name:string;
  theme:Theme;

}
