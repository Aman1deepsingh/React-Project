import React from 'react'

export default function SpreadOperator() {
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const combined = [...numbersOne, ...numbersTwo];

    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;

    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021,
        color: 'yellow'
    }
    const updatedVehicle = { ...myVehicle, ...updateMyVehicle };
    const vehicle = Object.keys(updatedVehicle).map((key, index) =>
            <li key={index}>{updatedVehicle[key]}</li>
        )
    return (
        <>
            <div>Combined array</div>
            <p>{combined}</p>
            <p>{one}</p>
            <p>{two}</p>
            <p>{rest}</p>
            <ul>{ vehicle }</ul>
        </>
    )
}
