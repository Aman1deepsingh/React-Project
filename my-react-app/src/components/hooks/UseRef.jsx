import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [inputValue, setInputValue] = useState("");
    const [currentInputValue, setCurrentInputValue] = useState("");
    const count = useRef(0);
    const inputElement = useRef();
    const previousInputValue = useRef();
    useEffect(() => {
        count.current = count.current + 1;
    })
    useEffect(() => {
        previousInputValue.current = currentInputValue
    }, [currentInputValue])
  return (
    <>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <h3>Render count {count.current}</h3>

          <input type="text" ref={inputElement} /><br />
          <button onClick={() => inputElement.current.focus()}>focus input</button><br />

          <input type="text" value={currentInputValue} onChange={(e) => setCurrentInputValue(e.target.value)} />
          <p>Current input value: {currentInputValue}</p>
          <p>Previous input value: { previousInputValue.current }</p>
    </>
  )
}
