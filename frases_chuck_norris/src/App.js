import React, { useState, useEffect } from 'react';
import { ButtonCatchFrases, Card } from './components';
import { apiNorris } from './services';

function App() {

  const [frase, setFrase] = useState('');

  const fetchData = async () => {
    try {
      const response = await apiNorris.get('jokes/random');
      setFrase(response.data);
    }catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="feed" >
      <Card icon_url={frase.icon_url} value={frase.value} />
      <ButtonCatchFrases fetchData={fetchData} />
    </div>
  );
}

export default App;
