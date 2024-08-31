import React, { useState, useEffect, useRef } from "react";
import Fireworks from "./Fireworks";
import LoadingAnimation from "./LoadingAnimation";
import HourglassAnimation from "./HourglassAnimation";
import { CiAlarmOn } from "react-icons/ci";
import { FaPause, FaPlay } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";

const TimerButton = () => {
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const alarmRef = useRef(null);

  useEffect(() => {
    let timerInterval;
    if (isRunning && !isPaused && remainingTime > 0) {
      timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
      setShowFireworks(true);
      setShowLoadingAnimation(false);
      playAlarm();
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, isPaused, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time * 60);
      setIsRunning(true);
      setIsPaused(false);
      setShowFireworks(false);
      setShowLoadingAnimation(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsPaused(!isPaused);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setShowFireworks(false);
    setShowLoadingAnimation(false);
    setIsPaused(false);
    stopAlarm();
  };

  const playAlarm = () => {
    alarmRef.current = new Audio('/new-years-eve-in-peru-fireworks-fire-crackers-and-rockets-to-celebrate-the-new-year-pisco-peru-2012-17692.mp3');
    alarmRef.current.play();
  };

  const stopAlarm = () => {
    if (alarmRef.current) {
      alarmRef.current.pause();
      alarmRef.current.currentTime = 0;
    }
  };

  return (
    <div className="timer-button-container">
      <input
        type="number"
        placeholder="Enter time in minutes"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="time-input"
      />
      <div className="button-container">
        <button className="btn btn-outline-success start-button" onClick={handleStart}>
          <CiAlarmOn size={30} />
        </button>
        <button className="btn btn-outline-warning pause-button" onClick={handlePause}>
          {isPaused ? <FaPlay size={25} /> : <FaPause size={25} />}
        </button>
        <button className="btn btn-outline-danger reset-button" onClick={handleReset}>
          <LuTimerReset size={25} />
        </button>
      </div>
      <div className="timer-disc">
        <span className="minutes">{Math.floor(remainingTime / 60)}</span>:
        <span className="seconds">{String(remainingTime % 60).padStart(2, '0')}</span>
      </div>
      {showLoadingAnimation && <LoadingAnimation />}
      {showLoadingAnimation && <HourglassAnimation />}
      {showFireworks && <Fireworks />}
    </div>
  );
};

export default TimerButton;


