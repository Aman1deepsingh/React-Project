
export default function Destructuring() {
    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [mustang, truck] = vehicles;

    function calculate(a,b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;

        return [add, subtract, multiply, divide];
    }
    const a = 9, b = 4;
    const [add, subtract, multiply, divide] = calculate(a, b);

    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red',
        registration: {
            city: 'Houston',
            state: 'Texas',
            country: 'USA'
        }
    }

    const message = print(vehicleOne);
    
    function print({ type, year, color, brand, model, registration: {state} }) {
        return `Type: ${type}, Year: ${year},Color: ${color}, Brand: ${brand}, Model: ${model} State: ${state}`;
    }

  return (
    <>
        <p>{mustang}</p>
        <p>{truck}</p>
        <div>Calculate</div>
        <div>{a} + {b} = { add }</div>
        <div>{a} - {b} = { subtract }</div>
        <div>{a} * {b} = { multiply }</div>
        <div>{a} / {b} = {divide}</div>
        <p>{ message }</p>
    </>
  )
}
