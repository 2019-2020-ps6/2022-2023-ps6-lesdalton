import {UserConfigComponent} from "../app/users/user-config/user-config.component";
import {UserConfigModel} from "./user-config.model";
import {PlayerStats} from "./stats.models";

export interface User {

  picture ?: string;
  id?: string;
  firstName: string;
  lastName: string;

  info?: string;
  config:UserConfigModel;

  stats : PlayerStats;
}
