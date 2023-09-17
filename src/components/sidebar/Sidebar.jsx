/** @format */

import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import logo from "../../../public/logo.png";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} height={40} width={40} alt='logo' />
        <span>MovieBox</span>
      </div>

      <div className={styles.menuItems}>
        <Link href='#' className={styles.menuItem}>
          <i className='ri-home-5-line'></i>
          <span>Home</span>
        </Link>
        <Link href='#' className={styles.menuItem}>
          <i className='ri-live-line'></i>
          <span>Movies</span>
        </Link>
        <Link href='#' className={styles.menuItem}>
          <i className='ri-tv-2-line'></i>
          <span>TV Series</span>
        </Link>
        <Link href='#' className={styles.menuItem}>
          <i className='ri-calendar-2-line'></i>
          <span>Upcoming</span>
        </Link>
        <div className={styles.adBox}>
          <span>Play movie quizes and earn free tickets</span>
          <span>50k people are playing now</span>
          <button>Start Playing</button>
        </div>

        <Link href='#' className={styles.menuItem}>
          <i className='ri-login-box-line'></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
