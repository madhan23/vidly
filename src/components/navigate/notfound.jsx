import React from 'react';
import notfound from "./404.jpg"

const NotFound = () => {
    return (
<body style={{marginTop:"40px",background:"#f5f5f5"}}>
        <div className="container">
        <div class="row">

        <div class="mx-auto w-70 mt-5">
      <img style={{marginTop:"50px"}}className="img-fluid " src={notfound} alt="Logo" /> 
 
        </div>
    
        </div>
        </div>
        </body>
     );
}
 
export default NotFound;
