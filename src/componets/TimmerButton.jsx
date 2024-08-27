import { FaHourglassStart } from "react-icons/fa";
import React, { useState, useEffect, useRef } from 'react';
import Fireworks from './Fireworks';
import { FaHourglassEnd } from "react-icons/fa";

const TimerButton = () => {
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const audioRef = useRef(null);

  const handleStartTimer = () => {
    setTimeLeft(5400); 
    setIsTimerActive(true);
    setIsAlarmActive(false);
    setShowFireworks(false); 
  };

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerActive) {
      triggerAlarm();
      setIsTimerActive(false);
    }
    return () => clearTimeout(timer);
  }, [isTimerActive, timeLeft]);

  const triggerAlarm = () => {
    const audio = new Audio('/new-years-eve-in-peru-fireworks-fire-crackers-and-rockets-to-celebrate-the-new-year-pisco-peru-2012-17692.mp3'); 
    audioRef.current = audio;
    audio.play();
    setIsAlarmActive(true);
    setShowFireworks(true); 
  };

  const handleStopAlarm = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsAlarmActive(false);
      setShowFireworks(false); 
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container">
      {!isAlarmActive && (
        <button className="btn btn-outline-warning btn-lg timer-button" onClick={handleStartTimer}>
          Start Timer <FaHourglassStart />
        </button>
      )}
      {isTimerActive && (
        <p className="timer-disc">
          <span className="minutes">{minutes}</span>:<span className="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
        </p>
       )}
      {isAlarmActive && (
        <div>
          <button className = "btn btn-outline-success btn-lg alarm-off" onClick={handleStopAlarm}>
            Alarm Off <FaHourglassEnd />
          </button>
          {showFireworks && <Fireworks />}
        </div>
      )}
    </div>
  );
};

export default TimerButton;

