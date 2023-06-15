import { HttpHeaders } from '@angular/common/http';
import {environment} from "../environment/environments.prod";

export const httpOptionsBase = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export const serverUrl = environment.serverUrl;
