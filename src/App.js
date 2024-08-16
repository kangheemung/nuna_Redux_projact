import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from "./component/Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const status = useSelector(state => state.status);
  const [additionalPoints, setAdditionalPoints] = useState(10);

  const dispatch = useDispatch();
  const handleStatusChange = (type) => {
      dispatch({ type: type });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id, password } });
  };

    const handleAddPoint = () => {
      setAdditionalPoints((prevPoints) => prevPoints - 1);
  };
  const handlePointChange = (isIncrement) => {
    setAdditionalPoints((prevPoints) => {
        if (isIncrement && prevPoints < 10) {
            return prevPoints - 1;
        } else if (!isIncrement && prevPoints > 0) {
            return prevPoints + 1;
        }
        return prevPoints; // Return current value if incrementing beyond 10 or decrementing below 0
    });
};
  const blockThreshold = 50;
  const stars = Array.from({ length: Math.floor(count / 100) }, (_, index) => index);

  return (
    <div className="App">
        <div className='name'>name:{id} </div>

       <input placeholder='이름을 적어주세요'value={id} onChange={(e) => dispatch({ type: "LOGIN", payload: e.target.value })} />
        <h1>Game Character Status</h1>
        <div  className='name'>
  <p>Total 추가 가능  Points: {additionalPoints}</p>
</div>
            <div className="status-container">
              <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkOwhHWNKJYNC60_ErXLGfIHfv-9GjwmRyg&s'></img>
              </div>
              <div>
                {Object.entries(status).map(([key, value]) => (
                    <Box
                    key={key}
                    title={key}
                    value={value}
                    onIncrement={() => handleStatusChange(`INCREMENT_${key.toUpperCase()}`)}
                    onDecrement={() => handleStatusChange(`DECREASE_${key.toUpperCase()}`)}
                    onPointChange={(isIncrement) => handlePointChange(isIncrement)}
                  />
                ))}
              </div>
            </div>
      </div>
  );
}

export default App;
