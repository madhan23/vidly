import http from "../HTTP Request/httpservices";
import config from "../config.json";
const apiUrl=config.apiUrl+"/users";
export function saveUsers(user){
return http.post(apiUrl,user);
}
