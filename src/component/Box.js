// Remove or use the unused variables in Box.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Box = ({value,num}) => {
  const count = useSelector(state => state.count);
  // Unused variables: id, password, GrandSonBox
  // Consider removing or using them in your component
  const dispatch = useDispatch();

  const increaseNum = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
      <div>
        <div className="state_box">
          <p>{value}</p>
          <p>{num}</p>
          <Button as="a" variant="success" onClick={increaseNum}>+1 </Button>
          <Button as="a" variant="success" onClick={decrease}>-1</Button>
         
        </div>
      </div>
  );
};

export default Box;
