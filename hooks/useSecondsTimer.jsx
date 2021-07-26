import React, { useState, useEffect } from 'react'


/**
 * @function useSecondsTimer
 * @description React Hook to use timer from n to 0 seconds
 * @param {any} defaultClock default time to start timer
 * @returns {any} [time, playing, togglePlayPause, handleReset]
 * @author Sarat Chandra Ejjapureddi
 */
export default function useSecondsTimer(defaultClock = 0) {
    const [time, setTime] = useState(defaultClock);
    const [playing, setPlaying] = useState(true);

    const tick = (e) => {
        e && e.preventDefault()
        if (time > 0 && playing) {
            setTime(time - 1)
        }
    }

    const handleReset = (e) => {
        e && e.preventDefault()
        setTime(defaultClock)
    }

    const togglePlayPause = (e) => {
        e && e.preventDefault()
        setPlaying(!playing)
    }

    useEffect(() => {
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, [time, playing])


    return [time, playing, togglePlayPause, handleReset]
}

