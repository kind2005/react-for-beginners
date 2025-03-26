import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams();
    console.log(id);
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
            <div>
                <h1>{movie.title_long}</h1>
                <img src={movie.large_cover_image} alt={movie.title} />
                <div>
                    <p>연도 : {movie.year}</p>
                    <p>장르 : {movie.genres ? movie.genres.join(", ") : movie.genres}</p>
                    <p>평점 : {movie.rating}</p>
                    <p>러닝타임 : {movie.runtime}분</p>
                    {movie.description_full ? (<p>설명 : {movie.description_full}</p>) : 
                        movie.description_intro ? (<p>설명 : {movie.description_intro}</p>) : 
                        null}
                </div>
            </div>
        )}
        </div>
    );
}

export default Detail;