import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return(
    <>
      <h1>Hello React!</h1>
      <MyComponent message={'Click so the number will increase by one at a time.'} />
    </>
  ) 
}

export default App
