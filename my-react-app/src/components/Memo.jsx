import React, { useState } from 'react'
import Todos from './Todos';

export default function Memo() {
    const [count, setCount] = useState(0);
  const [todos] = useState(["todo 1", "todo 2"]);
  return (
      <div>
          <Todos todos={ todos } />
          <b>Counter</b>
          <button type="submit" onClick={() => setCount(c => c + 1)}>Count++</button>
          <p>Count { count }</p>
    </div>
  )
}
