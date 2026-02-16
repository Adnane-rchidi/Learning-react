import UserCard from './anotherSimpleList/UserCard'
import './App.css'


function App() {
  const users = [
    {id: 1, name: 'Jamal', age: 22},
    {id: 2, name: 'Amal', age: 25},
    {id: 3, name: 'Adnane', age: 19},
  ]

  return(
    <>
      <div className='usersContainer'>
        <h1>Users List</h1>
        <div>
           {users.map((user) => (
            <UserCard
              key={user.id} 
              name={user.name} 
              age={user.age}  
            />
          ))}
        </div>
      </div>
    </>
  ) 
}

export default App
