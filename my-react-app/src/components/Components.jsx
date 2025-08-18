import React from 'react'
export default function Card(props) {
  return (
    <>
        <p style={{ width: props.width, height: props.height }} className='card'>Card component Width:{props.width} Height:{props.height}</p>
    </>
  )
}
