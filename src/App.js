import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from "./component/Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const count = useSelector(state => state.count); // Assuming 'count' is stored in the Redux store
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);

  const reduxDispatch = useDispatch();

  const increaseNum = () => {
    reduxDispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    reduxDispatch({ type: "DECREASE" });
  };

  const login = () => {
    reduxDispatch({ type: "LOGIN", payload: { id, password } });
  };

  const blockThreshold = 50;
  const stars = Array.from({ length: Math.floor(count / 100) }, (_, index) => index);

  return (
    <div className="App">
      <h1>
        <div>name:{id} password:{password}</div>
        <input placeholder='이름을 적어주세요'value={id}
         onChange={(e) => reduxDispatch({ type: "SET_ID", payload: e.target.value })} />
        <input placeholder='좋아하는 번호를 적어주세요 ' value={password} onChange={(e) => reduxDispatch({ type: "SET_PASSWORD", payload: e.target.value })} />
        <Button as="a" variant="primary" onClick={login}>Login</Button>
      </h1>
      <Button as="a" variant="success" onClick={increaseNum}>플러스 +1 추가</Button>
  
      <Button as="a" variant="success" onClick={decrease}>감소</Button>
      감소출력값: {count}
  <div className='container'>
      <Box value="Strength" num="40"/>
      <Box value="Power" num="30"/>
      <Box value="Speed" num="10"/>
      <Box value="Luck" num="4"/>
      </div>
    </div>
  );
}

export default App;
