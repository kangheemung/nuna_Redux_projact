import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from "./component/Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();
  const handleStatusChange = (type) => {
      dispatch({ type: type });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id, password } });
  };

  const blockThreshold = 50;
  const stars = Array.from({ length: Math.floor(count / 100) }, (_, index) => index);

  return (
    <div className="App">
        <div>name:{id} password:{password}</div>
        <input placeholder='이름을 적어주세요'value={id}
         onChange={(e) => dispatch({ type: "LOGIN", payload: e.target.value })} />
        <input placeholder='좋아하는 번호를 적어주세요 ' value={password} onChange={(e) => dispatch({ type: "LOGIN", payload: e.target.value })} />
        <h1>Game Character Status</h1>
            <div className="status-container">
            {Object.entries(status).map(([key, value]) => (
                <Box key={key} title={key} value={value} onIncrement={() => handleStatusChange(`INCREMENT_${key.toUpperCase()}`)} 
                    onDecrement={() => handleStatusChange(`DECREASE_${key.toUpperCase()}`)} />
            ))}
            </div>
      </div>
  );
}

export default App;
