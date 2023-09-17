/** @format */

import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import axios from "axios";
import styles from "./moviedetails.module.css";
import Image from "next/image";
import DetailsSidebar from "@/components/detailsidebar/DetailsSidebar";

const getData = async (movieId) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0337e8808bdae9331dabf1e81b3f65d0&language=en-US40`,
      {
        cache: "no-store",
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error getting movie details: ", error);
    return null;
  }
};

const MovieDetails = async ({ params }) => {
  const movieData = await getData(params.movieId);

  let voteCount;

  if (movieData.vote_count >= 1000) {
    const voteDivided = (movieData.vote_count / 1000).toFixed(1);
    voteCount = voteDivided + "k";
  } else {
    voteCount = movieData.vote_count;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
            alt={movieData.title}
            fill
            className={styles.image}
          />
          <div className={styles.play}>
            <div className={styles.playIcon}>
              <i className='ri-play-fill'></i>
            </div>
            <span className={styles.watch}>Watch Trailer</span>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.dataContainer}>
            <div className={styles.metadata}>
              <span data-testid='movie-title'>{movieData.title}</span>
              <div className={styles.dot} />
              <span data-testid='movie-release-date'>
                {movieData.release_date}
              </span>
              <div className={styles.dot} />
              <span data-testid='movie-runtime'>{movieData.runtime}m</span>
              <div className={styles.dot} />
              <div className={styles.genres}>
                {movieData.genres.map((genre) => {
                  return (
                    <span className={styles.genre} key={genre.id}>
                      {genre.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className={styles.ratings}>
              <i className='ri-star-fill'></i>{" "}
              <span className={styles.voteAverage}>
                {movieData.vote_average.toFixed(2)}
              </span>{" "}
              | <span>{voteCount}</span>
            </div>
          </div>

          <div className={styles.overviewContainer}>
            <div className={styles.overview}>
              <p data-testid='movie-overview'>{movieData.overview}</p>
            </div>
            <div className={styles.side}>
              <DetailsSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
