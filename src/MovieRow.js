import React from "react"
class MovieRow extends React.Component {
  viewMovies(){
    console.log("trying to view movie")
    console.log(this.props.movie.title)
    const url="http://www.themoviedb.org/movie/"+this.props.movie.id
    window.location=url
  }
    render(){
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img  alt="poster"  width="120" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovies.bind(this)} value="view"/>
              <p width="100"></p>
              
              
            </td>
          </tr>
        </tbody>
      </table>
    }
}
export default MovieRow