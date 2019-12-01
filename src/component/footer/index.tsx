import React from 'react';
import styles from './style.module.scss';
import { ReactComponent as InstagramIcon } from './img/instagram.svg';
import { ReactComponent as TwitterIcon } from './img/twitter.svg';
import { ReactComponent as LinkedinIcon } from './img/linkedin.svg';
import { ReactComponent as GithubIcon } from './img/github.svg';

const Footer = ({ width }: { width: string }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper} style={{ width: width }}>
        <span className={styles.advice}>Please plug in your headset</span>
        <ul className={styles.iconList}>
          <li>
            <a href="https://github.com/alejandroweb" rel="noopener noreferrer" target="_blank">
              <GithubIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alejandrodriguez/" rel="noopener noreferrer" target="_blank">
              <LinkedinIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/alejandroweb" rel="noopener noreferrer" target="_blank">
              <TwitterIcon className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/alejandroweb/" rel="noopener noreferrer" target="_blank">
              <InstagramIcon className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
