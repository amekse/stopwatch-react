import React, {useState, useEffect} from "react";

/**
 * A custom hook with stopwatch feature
 * @param interval - custom tick count in miliseconds
 * @returns { pauseOrPlay, reset, pausedOrPlaying, current, addLap, lap } - object having pauseOrPlay : function to start or stop the timer, reset - function to reset the timer, pausedOrPlaying - currently playing or paused, current - current coiunt in the stopwatch, lap - lap list
 */
export default function useStopWatch(interval:number = 1000) {
    const [current, setCurrent] = useState(0)
    const [buttonName, setButtonName] = useState('Play')
    const [laps, setLaps] = useState<number[]>([])
    let timer:NodeJS.Timeout | undefined = undefined;

    useEffect(() => {
        clearTimeout(timer)
        if (current > 0) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timer = setTimeout(() => {
                setCurrent(current+1);
            }, interval)
        }
    },[current])

    const toggleStopwatchSwitch = () => {
        if (buttonName === 'Play') {
            timer = setTimeout(() => {
                setButtonName('Pause')
                setCurrent(current+1);
            }, interval)
        } else {
            setButtonName('Play')
            clearTimeout(timer)
            timer = undefined;
        }
    }

    const toggleReset = () => {
        setCurrent(0)
        setButtonName('Play')
        clearTimeout(timer)
        setLaps(_ => [])
        timer = undefined;
    }

    const addlap = () => {
        if (buttonName === "Pause") {
            setLaps(prev => [...prev, current])
        }
    }

    return {
        pauseOrPlay: toggleStopwatchSwitch,
        reset: toggleReset,
        pausedOrPlaying: buttonName,
        current: current,
        addLap: addlap,
        lap: laps
    }
}