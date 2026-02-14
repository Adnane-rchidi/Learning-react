import './App.css'
import MyComponent from './components/MyComponent'
import Salutation from './components/Salutation'

function App() {
  return(
    <>
      <h1>Hello React!</h1>
      <Salutation name={'Adnane'} age={19}/>
      <MyComponent message={'Click so the number will increase by one at a time'} />
    </>
  ) 
}

export default App
