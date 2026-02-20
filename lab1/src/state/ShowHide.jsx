import { useState } from "react"

const ShowHide = () => {
  const [visible, setVisible] = useState(true);

  function handleClick() {
    setVisible(prevVisible => !prevVisible);
  }

  return(
    <>
      <button onClick={handleClick}>
        {visible ? "Masque" : "Afficher"}
      </button>
      {visible && <p>Content</p>}
    </>
  )
}

export default ShowHide;