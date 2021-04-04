import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const doubleUp = () => setCount(count * 2)

  const divideByThree = () => setCount(previousCount => 
    count % 3 === 0 ? previousCount / 3 : previousCount
  )

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={doubleUp}>x2</button>
        <button onClick={divideByThree}>3の倍数の時だけ3で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;
