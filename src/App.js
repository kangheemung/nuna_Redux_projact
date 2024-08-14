import './App.css';
import React from 'react';
import Box from "./component/Box";
import { useDispatch, useSelector } from 'react-redux';

//버튼을 누른다.
//버튼을 누르면 +1씩 증가된 숫자 출력

function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const increaseNum= ()=>{
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    //type=액션의 이름(アクションの名前)

  };
  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };
  
  const login=()=>{
    dispatch({ type: "LOGIN", payload: { id: "nuna", password: "123" } });

    };

    return (
      <div className="App">
        <h1>
          {id}, {password}
        </h1>
        <button onClick={increaseNum}>플러스+1추가</button>
        출력값: {count}
        <button onClick={login}>Login</button>
       < button onClick={decrease}> 감소 </ button>
       감소출력값: {count}
        <Box />
      </div>
    );
}

export default App;
