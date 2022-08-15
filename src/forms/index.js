import React from "react";

const Index = ({HandleSubmit, handleClick, users, response, setUsers}) => 
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          placeholder="Digite seu usuario"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div className="blockResponse" onClick={handleClick}>
          <img src={response.avatar_url} className='avatar'/>
          <h2>Name: {response.name}</h2>
          <p>Numero de repositorios: {response.public_repos}</p>
          <i>{response.bio}</i>
        </div>
      )}
    </div>

export default Index;

