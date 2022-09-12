import './App.css';
import { useState, useEffect } from 'react';
import Users from './components/Users';

function App() {
  const [data, setData] = useState('');
  const [users, fetchUsers] = useState([]);

  const getData = () => {
    fetch('/api/users')
      .then((response) => res.json())
      .then((data => {
        console.log(data);
        fetchUsers(data);
      })
  }
  useEffect(() => {
    getData();
  }, []);

  // const connectToBackend = () => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // };


  return (
    <div className='container'>
      <h2>React Fetch API From Backend</h2>
      <ul>
        {users.map((item, i) => {
          return (
            <li key={i}>
              Name: {item.name} Email: {item.email}
            </li>
          );
        })}
      </ul>
    </div>
  )
}
export default App;
