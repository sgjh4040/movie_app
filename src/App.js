import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    results: []
  };
  getMovies = async () => {
    const {
      data: {
        results
      }
    } = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=e02050f991ddedb779571b20eb62034b&language=ko-Kr&query=%EC%96%B4%EB%B2%A4&page=1&include_adult=false");
    console.log(results);
    this.setState({ results, isLoading: false });

  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, results } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {results.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.release_date}
                title={movie.title}
                summary={movie.overview}
                poster={movie.poster_path}
                genres={movie.genre_ids}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;