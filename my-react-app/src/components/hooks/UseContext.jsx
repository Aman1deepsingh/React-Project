import React, { createContext, useState } from 'react'
import UseEffect from './UseEffect';
export const UserContext = createContext();

export default function UseContext() {
    const [name] = useState("Jesse");
    return (
        <>
            <UserContext.Provider value={name}>
                <h2>Hello {name}</h2>
                <UseEffect user={name} />
            </UserContext.Provider>
        </>
    )
}
