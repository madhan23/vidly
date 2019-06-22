import React, { Component } from 'react';
import del from "../images/del.png";
import update from "../images/update.png";
import add from "../images/add.png";
import http from "./httpservices";
import config from "../config.json"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from "../utils/progressbar";
import "./data.css";
class Datafetch extends Component {
    state = { 
    post:[]

     }

async componentDidMount() {
// axios.get(`https://jsonplaceholder.typicode.com/posts`)
// .then(res => {
//   const post = res.data;
//   this.setState({post});
// })

const {data:post}= await http.get(config.api);
this.setState({post})

}
handleAdd= async ()=>{
    const obj={title:'madhan'}
  
const post =[...this.state.post,obj]
this.setState({post})
}

handleupdate = async postdata=>{

    const {data}= await http.put(config.api+'/'+postdata.id,postdata); // patch only need particular field to update
    const post=[...this.state.post];
    const index=post.indexOf(postdata);
    post[index].title="updated.....";
    this.setState({post})

}
handleDelete= async postdata=>{
    const originaldata=this.state.post;
  const post=this.state.post.filter(r=>r.id!==postdata.id);
  this.setState({post})
  try{
    const {data}= await http.delete(config.api+'/'+postdata.id);

  }
  catch (exp){
if(exp.response && exp.response.status===404){
alert("already deleted....");
}else{
    alert("something went wrong.....");
    
    this.setState({post:originaldata})
}
  }
}
    
    render() { 
        
        return (
 <div className="container">
   <ToastContainer />
     <div className="progressbar">{this.state.post.length===0?<ProgressBar/>:''}</div>
   <button type="button" onClick={this.handleAdd} className="btn "><img  style={{height:'50px'}}src={add} alt="Logo" /></button>

    <table className="table">
    <thead className="thead-dark">
    <tr>
      <th scope="col">Quotes</th>
      <th scope="col">Action</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>

    {this.state.post.map(info=><tr key={info.id}><td>{info.title}</td><td><button type="button" onClick={()=>this.handleupdate(info)}  className="btn  "><img  style={{height:'50px'}}src={update} alt="Logo" /></button></td><td><button type="button" onClick={()=>this.handleDelete(info)} className="btn "><img  style={{height:'50px'}}src={del} alt="Logo" /></button></td></tr>)}

    </tbody>
</table>

</div>
          );
    }
}
 
export default Datafetch;