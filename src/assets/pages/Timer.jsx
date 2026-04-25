import { useRef, useState, useEffect } from "react"

function TimerPage() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false) // write logic stop start

    function callTimer() {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            setSeconds(elapsed);
        }, 100);

        return () => clearInterval(interval);
    }

    useEffect(() => {
        seconds
    }, []); 
    
    return (
        <section className="timer-sect">
            <div className="block-of-timer">
                <h2 className="timer-title">Timer</h2>
                <span className="timer">{seconds}</span>
                <button className="timer-act" onClick={callTimer}>d</button>
            </div>
        </section>
    )
}

export default TimerPage