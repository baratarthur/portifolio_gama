import React, { useState } from 'react';

import { User, Entrada } from './components';

function App() {

  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState('');
  const [info, setInfo] = useState(null);

  const getData = async (user) => {
    setLoading(<div style={{width:'100%', textAlign:'center'}} >Loading...</div>);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      setInfo(await response.json());
      setLoading('');
    } catch (e){
      setErro(e.message);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    getData(e.target.user.value);
  }

  return (
    <div className="App">
      <Entrada handle={submit} />
      {loading || erro || <User info={info} />}
    </div>
  );
}

export default App;
