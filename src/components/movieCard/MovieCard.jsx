/** @format */

import Image from "next/image";
import moviePoster from "../../../public/moviePoster.png";
import styles from "./moviecard.module.css";
import imdb from "../../../public/imdb.png";
import tomato from "../../../public/tomato.png";

const MovieCard = ({ movie }) => {
  const voteAverage = parseFloat(movie.vote_average.toFixed(2) * 10.0);
  return (
    <div className={styles.container} data-testid='movie-card'>
      <div className={styles.imageContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={400}
          priority
          className={styles.image}
          data-testid='movie-poster'
        />
        <div className={styles.favoriteIcon}>
          <i className='ri-heart-fill'></i>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <span data-testid='movie-release-date' className={styles.date}>
          {movie.release_date}
        </span>
        <span data-testid='movie-title' className={styles.title}>
          {movie.title}
        </span>

        <div className={styles.ratingsContainer}>
          <div className={styles.imdb}>
            <Image src={imdb} width={40} height={20} alt='imdb' />
            <span>{voteAverage}/100</span>
          </div>
          <div className={styles.tomato}>
            <Image src={tomato} width={20} height={20} alt='imdb' />
            <span>{voteAverage}%</span>
          </div>
        </div>

        <div className={styles.genres}>
          <span>action, adventure</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
