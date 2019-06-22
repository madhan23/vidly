import React, { Component } from "react";
import {deleteMovie,getMovies} from "../services/MovieService";
import {getGenres} from "../services/GenreService";
import Like from "./commons/Like";
import Pages from './commons/pages';
import'./home.css';
import {moviesplits} from '../utils/pagination';
import List from "./commons/listgroup";
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
import {ToastContainer} from 'react-toastify';
import _ from "lodash";
class home extends Component {
  state = {
    movieList:[],
    genres:[],
    PageCount:3,
    currentpage:1,
    currenttopic:'All Genres',
      wordsearch:''
    
  };
  async componentDidMount(){
    const {data}=await getGenres();
    const genres=[{ _id:'',name:"All Genres"},...data]
    const {data:movieList}=await getMovies();
    this.setState({movieList,genres})
  }

  deleteList = async movieId => {
   const movieList = this.state.movieList.filter(d => d._id !==movieId);

    try{
      const {data}=await deleteMovie(movieId)
      this.setState({ movieList });
      }catch(exp){

        if(exp.response && exp.response.status===404)
          toast.error("Movie already deleted") ;
      }
 
    
  };

  liketoggle = movie => { 
    let movieList = [...this.state.movieList];
    const index = movieList.indexOf(movie);
    movieList[index].like = !movie.like;
    this.setState({ movieList });
  };
onhandlepages=(page)=>{
this.setState({currentpage:page})
};


listhandle=(topic)=>
{ 
 this.setState({currenttopic:topic, currentpage:1})
}
  searchHandle=({target})=>{
this.setState({wordsearch:_.startCase((target.value))})
}

  render() {
    const {user}=this.props;
   const {movieList,PageCount,currentpage, currenttopic,genres}=this.state;
   const filterList=currenttopic!=="All Genres" ?movieList.filter(movie=> movie.genre.name===currenttopic):_.filter(this.state.movieList,movie=> movie.title.startsWith(this.state.wordsearch));
   const movie=moviesplits( filterList,currentpage,PageCount);

    const content = (
      <table  id="t" className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            {user &&(<th scope="col">Action</th>)}
          </tr>
        </thead>
        <tbody>
          {movie.map(movie => (
            <tr key={movie._id}>
              <th scope="row"> <Link to={`/movies/${movie._id}`}>{movie.title}</Link></th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like  attract={movie.like} fg={() => this.liketoggle(movie)} />
              </td>
              {user&&(
              <td>
              <button
                  className="btn btn-danger"
                  onClick={() => this.deleteList(movie._id)}
                >
                  Delete
                </button>
              </td>
              )} 
            </tr>
          ))}
        </tbody>
      </table>
    );
    return (
      <div className="container">
      <ToastContainer />
        <div className="row">
    
    <div className="col-md-3">
    <h4>
         <span style={{color:"red"}}>{movieList.length !== 0?`Showing ${filterList.length} movies in the Database` : "There is no movies in the Database"} </span>
        </h4>
        <br />
     <List
    onlisthandle={this.listhandle}
    Topic={currenttopic}
    Genrelist={genres}


     />
    </div>
    <div className="col-md-8" ><br/>
    <input className="form-control mr-sm-2 w-50" value={this.state.wordsearch} onChange={this.searchHandle} type="search" placeholder="Search" aria-label="Search"/> 
    <Link  
    id="add-btn" 
    className="btn btn-outline-success" 
    to="/movies/new"
    >Add Movie</Link><br/>

    {movieList.length !== 0 ? content : ""}
    </div>
  </div>

        <Pages
        currentpageinfo={currentpage}
        PageCount={PageCount}
        movielength={filterList.length}
        pagehandle={this.onhandlepages}
        previoushandle={this.previousPage}
        nexthandle={this.nextPage}
        />
      </div>
    );
  }
}

export default home;
