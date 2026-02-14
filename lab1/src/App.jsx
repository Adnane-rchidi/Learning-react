import React from 'react'

import './App.css'
import Button from './event/Button'
import LoginForm from './event/LoginForm'

function App() {
  return(
    <>
      <h1>Hello React!</h1>
      {/* event part */}
      <Button />
      <LoginForm />
    </>
  ) 
}

export default App
