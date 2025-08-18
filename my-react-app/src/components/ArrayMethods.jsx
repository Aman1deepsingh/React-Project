function ArrayMethods() {
    const fruits = ['apple', 'orange', 'banana'];

    const listItems = fruits.map((fruit, index) => 
        <li key={index}>{ fruit }</li>
    )
    return <ul>{ listItems }</ul>
}

export default ArrayMethods