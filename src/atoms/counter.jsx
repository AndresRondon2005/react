import React from "react";

import "../styles/counter.css"

function Counter() {
  const [count, setCount] = React.useState (0);
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const incrementCount = () => {
    setCount(count + 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div className='Counter-quiz'>
      <h1 className='counter-text'><span className="number-count">{count}</span></h1>
      <button className='decrement' onClick={decrementCount}>-</button>
      <button className='increment' onClick={incrementCount}>+</button>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
    )
}

export default Counter;