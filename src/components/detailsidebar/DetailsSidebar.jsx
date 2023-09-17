/** @format */

import React from "react";
import styles from "./detailssidebar.module.css";
import Image from "next/image";
import moremovies from "../../../public/moremovies.png";

const DetailsSidebar = () => {
  return (
    <div className={styles.container}>
      <button className={styles.showtimeButton}>See Showtimes</button>
      <button className={styles.moreOptionButton}>
        <i className='ri-list-unordered'></i> More Watch Options
      </button>
      <div className={styles.moreMovies}>
        <Image
          src={moremovies}
          alt='more movies'
          className={styles.image}
          fill
        />
        <div className={styles.moreMoviesButton}>
          <span>
            <i className='ri-list-unordered'></i> The Best Movies and Shows in
            September
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsSidebar;
