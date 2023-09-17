/** @format */

import React from "react";
import "remixicon/fonts/remixicon.css";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Link href='#'>
          <i className='ri-facebook-box-fill'></i>
        </Link>
        <Link href='#'>
          <i className='ri-instagram-line'></i>
        </Link>
        <Link href='#'>
          <i className='ri-twitter-fill'></i>
        </Link>
        <Link href='#'>
          <i className='ri-youtube-fill'></i>
        </Link>
      </div>

      <div className={styles.links}>
        <Link href='#'>Conditions of Use</Link>
        <Link href='#'>Privacy & Policy</Link>
        <Link href='#'>Press Room</Link>
      </div>

      <div className={styles.copyright}>
        <span>© 2021 MovieBox by Tobiloba Olasupo.</span>
      </div>
    </div>
  );
};

export default Footer;
