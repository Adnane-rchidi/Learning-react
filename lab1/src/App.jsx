import './App.css'
import MyComponent from './components/MyComponent'
import SalutationFirstWay from './components/SalutationFirstWay'
import SalutationSecondWay from './components/SalutationSecondWay'
import SalutationThirdWay from './components/SalutationThirdWay'

function App() {
  const person={
        name: 'Adnane',
        languages:{
          languageOne: 'Englisch',
          languageTwo: 'Arabisch',
          languageThree: 'Deutsch'
        }
      }
  return(
    <>
      <h1>Hello React!</h1>
      <SalutationFirstWay name={'Adnane'} age={19}/>
      
      <SalutationSecondWay name={'Adnane'} age={19}/>

      {/* //we can use the coposent multiple times with diffrent content */}
      <SalutationSecondWay name={'Adnane'} age={19}>
        <button className='btn'>modify</button>
      </SalutationSecondWay>
      <SalutationThirdWay person={person}/>
      <MyComponent message={'Click so the number will increase by one at a time'} />
    </>
  ) 
}

export default App
