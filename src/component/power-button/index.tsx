import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import React from 'react';
import styles from './style.module.scss';
import { Props } from './type';

const ICON_SIZE = 20;

const PowerButton: React.SFC<Props> = ({ onClick, powerOn = true }) => {
  const handleOnClick = () => {
    onClick(!powerOn);
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper} onClick={handleOnClick}>
        <PowerSettingsNewRoundedIcon
          htmlColor={powerOn ? styles.colorOn : styles.colorOff}
          style={{ height: ICON_SIZE, width: ICON_SIZE }}
        />
      </div>
      <span className={styles.title}>Power</span>
    </div>
  );
};

export default PowerButton;
