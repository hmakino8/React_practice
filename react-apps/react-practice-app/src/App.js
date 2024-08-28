import React, { useState } from 'react';
import {useEffect} from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  const handleOnClickIncliment = () => {
      setCount(count + 1);
  }

  const handleOnClickDecliment = () => {
      setCount(count - 1);
  }

  return (
    <div className="App">
      <p>カウント : {count}</p>
      <Button btn_click={ handleOnClickIncliment } btn_txt="カウントアップ"/>
      <Button btn_click={ handleOnClickDecliment } btn_txt="カウントダウン"/>
    </div>
  );
}

export default App;
