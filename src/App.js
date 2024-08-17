
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
      <div className='name'>
        <p>Total 추가 가능 Points: {additionalPoints}</p>
      </div>
  
      {status['luck'] > 19 && (
        <div className="image-container">
          <img className='img' src='https://image.fmkorea.com/files/attach/new4/20240412/6913252080_1135415169_36607c0bb8bff08e1cc3ed291e2f7895.jpeg' alt='' />
          <div>koko</div>
        </div>
      )}
      {status['speed'] > 10 && (
        <div className="image-container">
          <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVNKa6a0IVLMT6xj_NPKvfyw-EB7Fjc5xSZnIY4B71C8EA7SDn1NbDBOoorHPWAzoNgE&usqp=CAU' alt='' />
          <div>koko</div>
        </div>
      )}
       {status['power'] > 10 && (
        <div className="image-container">
          <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBa1FxORcUGeTEgA5KwvNoIXD4KppuCxRDnQ&s' alt='' />
          <div>koko</div>
        </div>
      )}
       {status['defense'] > 48 && (
        <div className="image-container">
          <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7ITD7o_g5O7JbqWRfs7pjHCmHTp2ju0Upw&s' alt='' />
          <div>koko</div>
        </div>
      )}
   {!(
        status['luck'] > 19 ||
        status['speed'] > 10 ||
        status['power'] > 10 ||
        status['defense'] > 48
      ) && (
        <div className="image-container">
          <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkOwhHWNKJYNC60_ErXLGfIHfv-9GjwmRyg&s' alt='' />
          <div>koko</div>
        </div>
      )}
      <div className="status-container" style={{ display: 'flex', flexDirection: 'row' }}>
        {Object.entries(status).map(([key, value]) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="grouped-items">
              <Box
                title={key}
                value={value}
                additionalPoints={additionalPoints}
                onIncrement={() => handleStatusChange(`INCREMENT_${key.toUpperCase()}`)}
                onDecrement={() => handleStatusChange(`DECREASE_${key.toUpperCase()}`)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default App;
