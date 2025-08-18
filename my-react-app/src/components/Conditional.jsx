import React from 'react'

export default function Conditional() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : hour < 15 ? "Good Afternoon" : "Good Evening";
  return (
    <>
          <p>{ greeting }</p>
    </>
  )
}
