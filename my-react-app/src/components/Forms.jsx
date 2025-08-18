import React, { useState } from 'react'

export default function Forms() {
    const [name, setName] = useState("");
    const [option, setOption] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        let value = e.target.value.value;
        let option = e.target.select.value;
        setOption(option)
        setErrorMessage("");
        try {
            if (value.trim() === "") throw new Error("Input can't be empty");
            if (value.length < 5) throw new Error("Input should be longer than 5");
            setName(value);
        } catch (error) {
            setErrorMessage("Error: " + error.message)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="form-input">Enter your name:</label>
                    <input type="text" id='form-input' name='value' />
                </p>
                
                <p>
                    <select name="select" id="select">
                        <option>Select an option</option>
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
                    </select>
                </p>
                <button type="submit">Submit</button>
            </form>
            {!errorMessage ? <p>Your name is {name}</p> : <p>{errorMessage}</p>}
            <p>Selected option { option }</p>
        </>
    )
}
