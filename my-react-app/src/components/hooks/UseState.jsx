import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Red");
    const [formData, setFormData] = useState({ name: "Peter", age: 32, job: "developer" });
    const colors = ['Red', 'Blue', 'Green'];
    function handleColor() {
        setColor(color => color = colors[Math.floor(Math.random() * colors.length)]);
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    return (
        <div>
            <h2>UseState Counter</h2>
            <p>Count {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Count++</button>
            <button onClick={() => setCount(c => c - 1)}>Count--</button>
            <h2>Selected Color</h2>
            <p>{color}</p>
            <button onClick={handleColor}>Change color</button>
            <h2>Person bio</h2>
            <p>Name: {formData.name}</p>
            <p>Age: {formData.age}</p>
            <p>Job: {formData.job}</p>
            <form action="" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">Change name</label>
                    <input type="text" name='name' onChange={handleChange} id='name'/>
                </p>
                <p>
                    <label htmlFor="age">Change age</label>
                    <input type="number" name='age' onChange={handleChange} id='age'/>
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
