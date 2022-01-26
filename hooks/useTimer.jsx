
import React, { useState, useEffect } from 'react'


/**
 * @function useTimer
 * @description React Hook to use timer in format hh:mm:ss
 * @param {any} defaultClock default time to start timer
 * @param {any} defaultRunningStatus default runing status of timer
 * @returns {any} [time, isTimerRunning, togglePlayPause, handleReset]
 * You can use the values timer, isTimerRunning, toggleTimer, resetTimer
 * @author Sarat Chandra Ejjapureddi
 */
export default function useTimer(defaultClock = 0, defaultRunningStatus =false) {
    const [time, setTime] = useState(defaultClock);
    const [isTimerRunning, setTimerRunning] = useState(defaultRunningStatus);
    const [timerData, setTimerData] = useState('HH:MM:SS');

    const tick = (e) => {
        e && e.preventDefault()
        if (time >= 0 && isTimerRunning) {
            setTime(time + 1)
        }
    }

    const handleReset = (e) => {
        e && e.preventDefault()
        setTime(defaultClock)
    }

    const togglePlayPause = (e) => {
        e && e.preventDefault()
        setTimerRunning(!isTimerRunning)
    }

    const secondsToHMSText = (seconds) => {
        // Use this function if you want to get timer data in text
        // example - '2 hours, 44 minutes, 49 seconds'
        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }

    const secondsToHMS = (seconds) => {
        console.log(seconds)
        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);
    
        var hDisplay = h > 0 ? String(h).padStart(2, '0') : "00";
        var mDisplay = m > 0 ? String(m).padStart(2, '0') : "00";
        var sDisplay = s > 0 ? String(s).padStart(2, '0') : "00";
        // example - '2 hours, 44 minutes, 49 seconds'
        return hDisplay + ':' + mDisplay + ':' + sDisplay; 
    }

    useEffect(() => {
        setTimerData(secondsToHMS(time))
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, [time, isTimerRunning])


    return [timerData, isTimerRunning, togglePlayPause, handleReset]
}