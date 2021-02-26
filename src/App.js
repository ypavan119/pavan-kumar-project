
import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'
import favourite from './favourite';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }

  
   this.performSearch("magadheera")

  }
  performSearch(searchTerm){
    console.log("perform search using moviedb")
    const urlstring="http://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+searchTerm
    $.ajax({
      url:urlstring,
      success:(searchResults)=>{
        console.log("fetched data sucessfiully")
        const results = searchResults.results
        var movierows =[]
        results.forEach((movie) => {
          movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
          const movieRow=<MovieRow key={movie.id} movie={movie}/>
          movierows.push(movieRow)
          
        })
        this.setState({rows:movierows})
      },
      error: (xhr,status,err)=>{
        console.log("failed to fetch data")
      }


    })
  }
  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }
  render(){
    return (
      <div className="App">
        <table className="App-header">
          <tbody>
            <tr>
              <td><img alt="app icon" width="50" src="./movie.jpg"></img></td>
              <td width="15"/>
              <td><h1>MOVIE SEARCH APPLICATION</h1></td>
              <td width="100"/>
              
              
            </tr>
          </tbody>
        </table>
        <input style={{
          fontSize:24,
          display:'block',
          width:"99%",
          paddingTop:8,
          paddingBottom:8
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="enter the movie"/>

        {this.state.rows}
        
      </div>
    );
  }

  
  



  
}

export default App;
