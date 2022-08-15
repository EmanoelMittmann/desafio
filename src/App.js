import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Index from './forms/index'

function App() {
  const [users, setUsers] = useState("");
  const [response, setResponse] = useState("");
  const [error, setErrors] = useState("")

  const instance = axios.create({
    baseURL: "https://api.github.com/users/",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const GetResponse = await instance.get(`${users}`);
    setResponse(GetResponse.data);
    setErrors(GetResponse.error)
  };

  const handleClick = async (e) => {
    e.preventDefault();

    window.open(`https://github.com/${users}`);
  };

  return (
    <div className="App">
      <Index
        HandleSubmit={HandleSubmit}
        handleClick={handleClick}
        response={response}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
