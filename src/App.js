import './App.css';
import React, { useState, useEffect } from 'react'; // Import 'useState' and 'useEffect'
import Box from "./component/Box";
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const increaseNum = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "nuna", password: "123" } });
  };

  const blockThreshold = 50;

  const [starAnimation, setStarAnimation] = useState(false); // State to trigger star animation


  const stars = Array.from({ length: Math.floor(count / 100) }, (_, index) => index);

  return (
    <div className="App">
      <h1>
        {id}, {password}
      </h1>
      <div class="sky">

      <div class="star"></div>
      <Button as="a" variant="success" onClick={increaseNum}>플러스 +1 추가</Button>
      <div className="stars-container">
        {stars.map(star => (
          <div key={star} className={`star ${starAnimation ? 'falling' : ''}`}></div>
        ))}
      </div>
      <Button as="a" variant="primary" onClick={login}>Login</Button>
      <Button as="a" variant="success" onClick={decrease}>감소</Button>
      감소출력값: {count}
  
      <Box value="Strength" num="40"/>
      <Box value="Power" num="30"/>
      <Box value="Speed" num="10"/>
      <Box value="Luck" num="4"/>
   
    </div>
    </div>
  );
}

export default App;
