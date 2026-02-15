import './App.css'
import UserCard from './simpleList/UserCard'


function App() {
  const users = [
    {id: 1, name: "Anki", role: "Developer"},
    {id: 2, name: "Anna", role: "Designer"},
    {id: 3, name: "Anki", role: "Product Manager"}
  ];
    
  return(
    <div className='app'>
      <h1>User List</h1>
      <div className='userList'>
        {users.map((user) => (
          <UserCard 
          key={user.id} 
          name={user.name} 
          role={user.role}
          />
        ))}
      </div>
    </div>
  ) 
}

export default App;
