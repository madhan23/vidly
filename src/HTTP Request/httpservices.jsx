import axios from 'axios';
import {toast} from 'react-toastify';
import Raven from "raven-js";
import Logger from "../services/logservices";
axios.interceptors.response.use(null,err=>{   //  handling unexcepted error
    console.log("interceptors")
    const errorinfo=err.response && err.response.status>=400 && err.response.status<400;
    if(!errorinfo){
   // toast.error("unexpected error occurs....") ;
    Logger.log(err);
    }
return Promise.reject(err);
});
function setJwt(jwt)
{
axios.defaults.headers.common['x-auth-token']=jwt// providing auth
}
export default{
  get:axios.get,
  post:axios.post,
  put:axios.put,
  delete:axios.delete,
setJwt
}