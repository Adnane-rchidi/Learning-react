import './App.css'
import MyComponent from './components/MyComponent'
import SalutationFirstWay from './components/SalutationFirstWay'

function App() {
  return(
    <>
      <h1>Hello React!</h1>
      <SalutationFirstWay name={'Adnane'} age={19}/>
      <MyComponent message={'Click so the number will increase by one at a time'} />
    </>
  ) 
}

export default App
