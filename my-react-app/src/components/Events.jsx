import React, { useState } from 'react'

export default function Events() {
    const [color, setColor] = useState();
    function changeColor() {
        const colors = ['#08B2E3', '#9b2eb1ff', '#005E7C', '#FF7F11'];
        setColor(colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1)) + 0])
    }
  return (
    <>
      <p onClick={changeColor} style={{color: color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus ipsum veniam officia eligendi doloribus, eveniet, dolorem nobis quibusdam quisquam consectetur! Molestias quia rem nam repellat corporis neque quae deserunt.</p>
    </>
  )
}
