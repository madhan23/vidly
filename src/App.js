import React, { Component } from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/navigate/notfound";
import Rentals from "./components/navigate/rentals";
import Customer from './components/navigate/customer';
import Navigate from './components/navigate/navigation';
import auth from "./services/authServices";
import AddMovie from "./movieForm";
import Register from "./Register";
import Table from "./HTTP Request/data";
import Login from "./loginForm";
import Logout from "./logout";
import "./App.css";
import ProtectedRouter from "./components/commons/ProtectedRouter";
class App extends React.Component {
  state={user:''}
 componentDidMount(){
  try{
    const user=auth.getToken()

  this.setState({user});
  }
  catch(exp){}
    }
  render() {
    return (
  <React.Fragment>
        <Navigate user={this.state.user}/>
  <main className="container">
        <Switch>  
        <Route path="/home" render={(props)=><Home {...props} user={this.state.user}/>}/>
        <ProtectedRouter path="/customer" component={Customer}/>
        <ProtectedRouter path="/rentals" component={Table}/>
        <Route path="/notfound"/>
        <Route path="/login" component={Login}/> render={()=><NotFound />}
        <Route path="/logout" component={Logout}/>
        <ProtectedRouter  path="/movies/:id"   render={(props)=><AddMovie {...props}/>}/>
        <Route path="/reg" component={Register}/>
        <Redirect from="/" exact  to="/home" />
        <Redirect to="/notfound"/>
      </Switch>
</main>
      </React.Fragment>
    );
  }
}

export default App;