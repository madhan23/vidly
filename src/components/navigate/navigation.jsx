import React from 'react';
import {NavLink} from "react-router-dom";
const navigate = ({user}) => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">Vindly</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <NavLink className="nav-link nav-item"  to="/customer">Customer</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" to="/home">Home</NavLink>
      </li>
    {!user?
    (<React.Fragment>
          <li className="nav-item">
          <NavLink  className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className="nav-link" to="/rentals">Rentals</NavLink>
          </li>
    </React.Fragment>
    )   
:
      ( <React.Fragment>
       <li className="nav-item">
       <NavLink  style={{color:"coral"}}className="nav-link" to="#">{user}</NavLink>
       </li>
       <li className="nav-item">
       <NavLink  className="nav-link" to="/logout">Logout</NavLink>
       </li>
      </React.Fragment>
      )
    }
    </ul>
  </div>
</nav>
      );
}
 
export default navigate;

