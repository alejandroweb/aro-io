import React, { useEffect } from 'react';
import useSoundcloud from 'src/hook/use-soundcloud';
import styles from './style.module.scss';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import SoundCloudLogo from './img/sound-cloud-logo-white.png';
import { Props } from './type';

const TOTAL_BARS = 100;
const TOTAL_ZEROS = 32;
const DEFAULT_URL = 'https://soundcloud.com/twisttted/sets/aro-io';

const ProgressBar = ({ percentage, powerOn }: { percentage: number; powerOn: boolean }) => {
  const completed = powerOn ? Math.floor(percentage) : 0;
  const pending = powerOn ? Math.floor(TOTAL_BARS - percentage) : TOTAL_BARS;

  return (
    <span className={styles.progressBar}>
      {[...Array(completed)].map((_el, index) => (
        <span className={styles.progressBarOn} key={`progress-bar-on-${index}`}>
          I
        </span>
      ))}
      {[...Array(pending)].map((_el, index) => (
        <span className={styles.progressBarOff} key={`progress-bar-off-${index}`}>I</span>
      ))}
    </span>
  );
};

const AudioPlayer: React.FC<Props> = ({ powerOn }) => {
  const { currentTrack, loaded, play, stop, pause, nextTrack, previousTrack, reset, trackInfo } = useSoundcloud();
  const minutes = loaded ? `${trackInfo.minutes}` : '00';
  const seconds = loaded ? `${trackInfo.seconds}` : '00';
  const title = loaded ? currentTrack.title : 'Loading ...';
  const url = loaded ? currentTrack.permalink_url : DEFAULT_URL;
  const screenTitle = powerOn ? title.toUpperCase() : [...Array(TOTAL_ZEROS)].map(() => '0').join('');

  useEffect(() => {
    if (loaded && !powerOn) {
      reset();
    }
  }, [loaded, powerOn]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <aside className={styles.artworkContainer}>
          {loaded && powerOn ? (
            <img alt={currentTrack.title} className={styles.artwork} src={currentTrack.user.avatar_url} />
          ) : null}
        </aside>
        <div>
          <h4 className={powerOn ? styles.title : styles.titleOff}>{screenTitle}</h4>
          <div className={styles.info}>
            <ProgressBar percentage={trackInfo.percentage} powerOn={powerOn} />
            <span className={powerOn ? styles.time : styles.timeOff}>
              {`${minutes.length < 2 ? `0${minutes}` : minutes} : ${seconds.length < 2 ? `0${seconds}` : seconds}`}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <div>
          <PlayArrowRoundedIcon
            htmlColor={'#e8e8e8'}
            onClick={powerOn ? play : undefined}
            style={{ height: 20, width: 20 }}
          />
          <StopRoundedIcon
            htmlColor={'#e8e8e8'}
            onClick={powerOn ? stop : undefined}
            style={{ height: 20, width: 20 }}
          />
          <PauseRoundedIcon
            htmlColor={'#e8e8e8'}
            onClick={powerOn ? pause : undefined}
            style={{ height: 20, width: 20 }}
          />
          <SkipPreviousRoundedIcon
            htmlColor={'#e8e8e8'}
            onClick={powerOn ? previousTrack : undefined}
            style={{ height: 20, width: 20 }}
          />
          <SkipNextRoundedIcon
            htmlColor={'#e8e8e8'}
            onClick={powerOn ? nextTrack : undefined}
            style={{ height: 20, width: 20 }}
          />
        </div>
        <a className={styles.logoSoundCloudLink} href={url} rel="noopener noreferrer" target="_blank">
          <img alt="Soundcloud" className={styles.logoSoundCloud} src={SoundCloudLogo} />
        </a>
      </div>
    </div>
  );
};

export default React.memo(AudioPlayer);
