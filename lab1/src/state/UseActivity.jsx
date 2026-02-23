import { Activity, useState } from "react"
import Counter from './Counter'

const UseActivity = () => {

  const [visible, setVisible] = useState(true)
  function handleClick() {
    setVisible((prev) => !prev)
  }

  return(
    <>
      {/* {visible && <Counter />} */}

      {visible ? <Counter /> : <p>Pas de computer</p>}

      <Activity mode={visible ? "visible" : "invisible"}>
        
      </Activity>

      <button onClick={handleClick}>{visible ? "visible" : "invisible"}</button>
    </>
  )

  

}

export default UseActivity;