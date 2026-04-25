import { useRef, useState, useEffect } from "react"

function TimerPage() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // write logic stop start
    const [animate, setAnimate] = useState(false);
    const interval = useRef(null);
    const startTimeRef = useRef(null);
    const elapsedRef = useRef(0);
    const timerRef = useRef(null);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 400);
        return () => clearTimeout(timeout);
    }, [seconds]);

    function callTimer() {
        if (!isRunning) {
            startTimeRef.current = Date.now();
            setIsRunning(true);
            interval.current = setInterval(() => {
                const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000) + elapsedRef.current;
                setSeconds(elapsed);
            }, 100);
        }
        else {
            clearInterval(interval.current);
            setIsRunning(false);
            elapsedRef.current = seconds;
        }
    }

    function reset() {
        clearInterval(interval.current);
        setIsRunning(false);
        setSeconds(0);
        elapsedRef.current = 0;
    }
    
    return (
        <section className="timer-sect">
            <div className="block-of-timer">
                <h2 className="timer-title">Timer</h2>
                <span 
                    ref={timerRef}
                    className={`timer ${animate ? 'pulse-trigger' : ''}`}
                >
                    {seconds}
                </span>
                <div className="wrapper-btns">
                    <button className="timer-act" onClick={callTimer}>{!isRunning ? "Start" : "Stop"}</button>
                    <button className="timer-act" onClick={reset}>Reset</button>
                </div>
            </div>
        </section>
    )
}

export default TimerPage