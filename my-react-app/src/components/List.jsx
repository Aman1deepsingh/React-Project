import React from 'react'

export default function List() {
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const mappedMonths = months.map((month, index) => <li key={index}>{month}</li>);
    return (
        <>
            <b>Months</b>
            <ul>{mappedMonths}</ul>
        </>
    )
}
