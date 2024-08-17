// Box.js

import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

const Box = ({ title, value, onIncrement, onDecrement }) => {
  const status = useSelector(state => state.status);
  const additionalPoints = useSelector((state) => state.additionalPoints);
  const dispatch = useDispatch(); 
  const handleIncrement = () => {
    if (additionalPoints > 0) {
      onIncrement(); // Increment status value
      dispatch({ type: "INCREMENT_POINTS" }); // Decrement additionalPoints
    }
  };
  const handleDecrement = () => {
    if (additionalPoints < 10) {
      onDecrement(); // Decrement status value
      dispatch({ type: "DECREMENT_POINTS" }); // Increment additionalPoints
    }
  };

  return (
        <div>
            <div className="state_box">
                <h3>{title}</h3>
                <p>{value}</p>
                <Button as="a" variant="success" onClick={handleIncrement} disabled={additionalPoints === 0}>
          +1
        </Button>





        <Button as="a" variant="danger" onClick={handleDecrement} disabled={additionalPoints === 10}>
          -1
        </Button>
            </div>
        </div>
    );
};

export default Box;
