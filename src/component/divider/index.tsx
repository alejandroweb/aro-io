import React from 'react';
import styles from './style.module.scss';
import { Props } from './type';

const Divider: React.SFC<Props> = ({ color }) => {
  return <div className={styles.divider} style={{ backgroundColor: color }} />;
};

export default Divider;
