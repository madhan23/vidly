import React,{ Component }  from "react";
import Form from "./components/commons/form";
import {saveUsers} from "./services/userService";
import Joi from "joi-browser";
class Register extends Form {
  state = {
    data: {
      name: "",
      password: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    //  schema definition
    name: Joi.string().required().label("Name"),
    email: Joi.string()
      .required()
      .email().label("Email"),
    password: Joi.string().required().label("Password")
  };
  option = { abortEarly: false }; // validation purpose......

  doSubmit = async () => {
    try{
            
const response =await saveUsers(this.state.data);
 localStorage.setItem("token",response.headers["x-auth-token"]);
window.location="/";
    }
    catch(exp){
      if(exp.response && exp.response.status===400){
      
        const errors={...this.state.errors};
        errors.email=exp.response.data;
        this.setState({errors})
      }
    }
  
  };

  render() {
    return (
      <div className="container mt-5 ">
        <form   method="post" onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderInput("email", "Email",)}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
