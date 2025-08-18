import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './UseContext';

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const user = useContext(UserContext);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [count])
    return (
        <>
            <p>Render Count {count}</p>
            <p>Hello again {user}</p>
        </>
    )
}
