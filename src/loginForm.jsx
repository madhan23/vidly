import React from "react";
import Joi from "joi-browser";
import Form from "./components/commons/form";
import auth from "./services/authServices";
import { Redirect,Link,Route } from 'react-router-dom';

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const {data}=this.state;
  try{
await auth.login(data.username,data.password);
const {state}=this.props.location;                 // used for read value of path routing page
window.location=state?state.from.pathname:"/";

  }
  catch(exp)
  {
    if(exp.response&& exp.response.status===400)
    {
      const errors={...errors};
      errors.username=exp.response.data;
      this.setState({errors})
    }
  }

  };

  render() {
    if(auth.getJwt())return <Redirect to="/"/>
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          Don't have an account?<Link to="/reg"> Sign up</Link><br/>
          {this.renderButton("Login")}
        </form>

      </div>
    );
  }
}

export default LoginForm;
