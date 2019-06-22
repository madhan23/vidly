import http from "../HTTP Request/httpservices";
import {apiUrl} from "../config.json";

export function getGenres() {
    return  http.get(apiUrl+"/genres");
  }
  