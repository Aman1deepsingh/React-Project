import React, { useState } from 'react'

export default function JSX() {
    const [message, setMessage] = useState("");
    let time = new Date().getHours();
    let greeting = "";
    if (time < 12) {
        greeting = "Good Morning"
    } else if (time < 15) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    function handleClick() {
        const input = document.getElementById('input').value;
        setMessage(input);
    }
    return (
        <>
            <p>Hello, {greeting}</p>
            <input id='input' type="text" />
            <button type="submit" id='submitbtn' onClick={handleClick}>Submit</button>
            <p className='message'>{message}</p>
        </>
    )
}
