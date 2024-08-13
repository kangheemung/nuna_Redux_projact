
import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//버튼을 누른다.
//버튼을 누르면 +1씩 증가된 숫자 출력

function App() {
  const count = useSelector(state=>state.count);
  const dispatch = useDispatch();

  const increaseNum= ()=>{
    dispatch({type:"INCREMENT"})
    //type=액션의 이름(アクションの名前)

  };

  return (
    <div className="App">
      <button onClick={increaseNum}> 플러스+1추가</button>
      출력값: {count}
    </div>
  );
}

export default App;
