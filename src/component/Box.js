// Remove or use the unused variables in Box.js
import React from 'react';
import Button from 'react-bootstrap/Button';

const Box = ({title, value, onIncrement, onDecrement, onPointChange }) => {



  return (
      <div>
        <div className="state_box">
        <h3>{title}</h3>
            <p>{value}</p>
  
<Button as="a" variant="success" onClick={() => { onIncrement(); onPointChange(true); }}>+1 </Button>
<Button as="a" variant="danger" onClick={() => { onDecrement(); onPointChange(false); }}> -1 </Button>



        </div>
      </div>
  );
};

export default Box;
