import PropTypes from "prop-types";
import{ Link } from "react-router-dom";
import styles from "./Movie.module.css";
 
 function Movie({ id, coverImg, title, summary, genres }) {
   return (
     <div>
       <div className={styles.ta_center}><Link to={`${process.env.PUBLIC_URL}/movie/${id}`}><img src={coverImg} alt={title} /></Link></div>
       <h2 className={styles.h60}>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
       </h2>
       <p className={styles.h150}>{summary.length > 250 ? `${summary.substring(0, 250)}...` : summary}</p>
       <ul>
         {genres.map((g) => (
           <li key={g}>{g}</li>
         ))}
       </ul>
     </div>
   );
 }
 
 Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
 };
 
 export default Movie;