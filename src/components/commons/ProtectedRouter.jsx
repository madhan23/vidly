import React from 'react';
import auth from "../../services/authServices";
import {Route,Redirect} from "react-router-dom";
const ProtectedRouter = ({render,path,component:Component,...rest}) => {

    return ( <Route
    {...rest}
    render={
        (props)=>{
         
if(!auth.getJwt()) return <Redirect to={{       // used for particular  path routing page to redirect to same path

    pathname:"/login",
    state: { from:props.location}

}}
/>

return Component?<Component {...props}/>:render(props)
        }
    }
    
    
    /> );
}
 
export default ProtectedRouter;