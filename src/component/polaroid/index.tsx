import React from 'react';
import Divider from 'src/component/divider';
import styles from './style.module.scss';

const Polaroid = () => {
  return (
    <div className={styles.polaroid}>
      <Divider color={styles.color1} />
      <Divider color={styles.color2} />
      <Divider color={styles.color3} />
      <Divider color={styles.color4} />
      <Divider color={styles.color5} />
      <Divider color={styles.color6} />
    </div>
  );
};

export default Polaroid;
