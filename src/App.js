
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from "./component/Box";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const status = useSelector(state => state.status);
  const additionalPoints = useSelector((state) => state.additionalPoints);
  const dispatch = useDispatch();
  const handleStatusChange = (type) => {
      dispatch({ type: type });
  };
  const handleLogin = () => {
    const inputVal = document.getElementById('name-input').value;
    dispatch({ type: 'LOGIN', payload: { id: inputVal }});
    document.getElementById('name-input').value = '';
  };



  

  const blockThreshold = 50;
  const stars = Array.from({ length: Math.floor(count / 100) }, (_, index) => index);

  return (
    <div className="App">
        <div className='name'>name: {id}</div>

        <input
        id="name-input"
        
      
        placeholder='名前を入力してください'
       
      />
        <button onClick={handleLogin}>
        Update Name
      </button>

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
                    additionalPoints={additionalPoints}
                    onIncrement={() => handleStatusChange(`INCREMENT_${key.toUpperCase()}`)}
                    onDecrement={() => handleStatusChange(`DECREASE_${key.toUpperCase()}`)}
                />
                ))}
              </div>
            </div>
      </div>
  );
}

export default App;
