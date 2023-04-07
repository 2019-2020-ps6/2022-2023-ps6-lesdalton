import {UserConfigComponent} from "../app/users/user-config/user-config.component";
import {UserConfigModel} from "./user-config.model";

export interface user {

  picture ?: string;
  id: string;
  firstName: string;
  lastName: string;

  info?: string;
  config:UserConfigModel;
}
