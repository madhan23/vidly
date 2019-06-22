import http from "../HTTP Request/httpservices";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const apiUrl=config.apiUrl+"/auth";

http.setJwt(getJwt()) // avoiding bi directional http and auth services....
  async function login  (email,password){
const {data:jwt}=await http.post(apiUrl,{email,password});
localStorage.setItem("token",jwt);
 
    
}

  function getToken()
{ console.log('token')
    const jwt=localStorage.getItem("token");
    const user=jwtDecode(jwt);
 return user.name;
}


 function removeToken()
{
    localStorage.removeItem("token");
}

function getJwt(){
return localStorage.getItem("token");
}

export default{
    removeToken,
    getToken,
    login,
    getJwt
}