import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  const [users, setUsers] = useState('')
  const [response, setResponse] = useState('')

  const style = {
    boxShadow:'0 0 5px blue',
    width: '500px',
    margin: 'auto',
    borderRadius:'10px',
    textAlign: 'center',
    cursor:'pointer'
  }

  
  const HandleSubmit = (e) => {
    e.preventDefault()
    axios
    .get(`https://api.github.com/users/${users}`)
    .then(res => setResponse(res.data))
    .catch(err => console.log(err))
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    window.location.replace(`https://github.com/${users}`)
  }

  return (
    <div className="App">
      <form onSubmit={HandleSubmit}>
        <input 
          placeholder='Digite seu usuario' 
          value={users} 
          onChange={(e) => setUsers(e.target.value)}
          />
          <button type="submit">Submit</button>
      </form>
      
    {response ? 
      <div style={style} onClick={handleClick}>
          <h2>Name: {response.name}</h2>
          <p>Numero de repositorios: {response.public_repos}</p>
          <i>{response.bio}</i>
      </div>
      :null    
    }

    </div>
  );
}

export default App;
