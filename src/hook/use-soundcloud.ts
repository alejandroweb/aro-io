import SoundcloudAudio from 'soundcloud-audio';
import { useState, useEffect } from 'react';
import { Track } from 'src/type/music';

const scPlayer = new SoundcloudAudio('95f22ed54a5c297b1c41f72d713623ef');
const url = 'https://soundcloud.com/twisttted/sets/aro-io';

const useSoundcloud = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackInfo, setTrackInfo] = useState({ minutes: 0, percentage: 0, seconds: 0 });

  const handleOnLoaded = (set: any) => {
    const { tracks } = set;

    setTracks(tracks);
    setLoaded(true);

    scPlayer.on('ended', function() {
      scPlayer.next();
    });

    scPlayer.on('timeupdate', function() {
      const currentTrack = tracks[currentIndex];
      const totalDuration = currentTrack.duration;
      const currentTime = scPlayer.audio.currentTime;
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      const percentage = (currentTime * 1000 * 100) / totalDuration;

      setTrackInfo({ percentage, minutes, seconds });
    });
  };

  useEffect(() => {
    scPlayer.resolve(url, handleOnLoaded);
  }, []);

  const nextTrack = () => {
    const index = currentIndex < tracks.length - 1 ? currentIndex + 1 : 0;

    setCurrentIndex(index);

    if (scPlayer.playing) {
      scPlayer.next({ loop: true });
    }
  };

  const previousTrack = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : tracks.length - 1;

    setCurrentIndex(index);

    if (scPlayer.playing) {
      scPlayer.previous();
    }
  };

  const play = () => {
    scPlayer.play({ playlistIndex: currentIndex });
  };

  const stop = () => {
    scPlayer.stop();
  };

  const pause = () => {
    scPlayer.pause();
  };

  const reset = () => {
    scPlayer.stop();
    setCurrentIndex(0);
  };

  return {
    currentTrack: tracks[currentIndex],
    loaded,
    nextTrack,
    pause,
    play,
    previousTrack,
    reset,
    stop,
    trackInfo,
  };
};

export default useSoundcloud;
