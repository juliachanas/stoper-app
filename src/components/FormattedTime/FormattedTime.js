import React from 'react';
import styles from './formatedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (miliseconds) => {
    const milisecondsRest = miliseconds % 1000;
    const seconds = Math.floor((miliseconds / 1000) % 60);
    const minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMiliseconds = milisecondsRest.toString().padStart(3, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMiliseconds}`;
  };

  return <div className={styles.time}>{formatTime(time)}</div>;
};

export default FormattedTime;
