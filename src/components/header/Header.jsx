/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../../public/logo.png";
import "remixicon/fonts/remixicon.css";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} height={40} width={40} alt='logo' />
        <span>MovieBox</span>
      </div>

      <div className={styles.search}>
        <input
          className={styles.input}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder='What do you want to watch?'
        />
        <button onClick={handleSubmit} className={styles.searchButton}>
          <i className='ri-search-line'></i>
        </button>
      </div>

      <div className={styles.navContainer}>
        <span>Logout</span>
        <div className={styles.hamburger}>
          <div className={styles.dash} />
          <div className={styles.dash} />
        </div>
      </div>
    </div>
  );
};

export default Header;
