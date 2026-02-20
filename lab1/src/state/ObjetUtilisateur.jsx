import { useState } from "react"

const ObjetUtilisateur = () => {
  const [user, setUser] = useState({
    name: 'Bob',
    city: 'Paris'
  })

  function demenage() {
    setUser({...user, city: 'Lyon'});
  }

  return(
    <>
      <p>{user.name} -- {user.city}</p>
      <button onClick={demenage}>
        Demenager
      </button>
    </>
  )
}

export default ObjetUtilisateur