import React from "react";
import { useState } from "react";

const para = `Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil.`

const TypingBox = () => {
    const[time, setTime] = useState("15");
    return(
        <div className="typingbox-container">
            <div className="timer-container">
                <div className="time">{time}</div>
                <div className="time-option">
                    <button onClick={()=>setTime("15")}>15s</button>
                    <button onClick={()=>setTime("30")}>30s</button>
                    <button onClick={()=>setTime("60")}>60s</button>
                </div>
            </div>
            <div className="text-container">
                <div className="text">
                    {para.trim().split("").map((val, index) => (<span key={'char' + index}>{val}</span>))}
                </div>
            </div>
        </div>
    );
}
export default TypingBox;