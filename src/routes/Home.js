import { useState, useEffect } from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    console.log("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    ).json();
    
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
      <div>
        <ul>
          {movies.map((movie) => (
            <li 
              key={movie.id} 
              className={styles.movie_list}>
              <Movie
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            </li>
            ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default Home;
