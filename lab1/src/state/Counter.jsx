import { useState } from "react"

const Couter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prewCount => prewCount + 1)
  }

  return(
    <>
      <h1>Computer: {count}</h1>
      <button onClick={increase}>
        Ajoute
      </button>
    </>
  )
}

export default Couter;