/** @format */

import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import poster from "../../../public/Poster.png";
import imdb from "../../../public/imdb.png";
import tomato from "../../../public/tomato.png";

const Hero = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${poster.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>John Wick 3 : Parabellum</h1>
        <div className={styles.ratingsContainer}>
          <div className={styles.imdb}>
            <Image src={imdb} width={40} height={20} alt='imdb' />
            <span>86.0/100</span>
          </div>
          <div className={styles.tomato}>
            <Image src={tomato} width={20} height={20} alt='imdb' />
            <span>97%</span>
          </div>
        </div>
        <span className={styles.desc}>
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </span>

        <button className={styles.watchButton}>
          <i className='ri-play-circle-fill'></i> <span>WATCH TRAILER</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
