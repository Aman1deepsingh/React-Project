import React, { memo } from 'react'

export default memo(function Todos({ todos }) {
    console.log("child component")
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => <p key={index}>{todo}</p>)}
        </div>
    )
})
