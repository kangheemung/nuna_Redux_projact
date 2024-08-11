
import './App.css';
import React, { useState } from 'react';
//버튼을 누른다.
//버튼을 누르면 +1씩 증가된 숫자 출력

function App() {
  const [num, setNum]=useState(0);
  const increaseNum= ()=>{
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div className="App">
      <button onClick={increaseNum}> 플러스+1추가</button>
      출력값: {num}
    </div>
  );
}

export default App;
