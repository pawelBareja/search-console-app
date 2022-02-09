import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';


 const CustomButton = ({text, type, handleClick, startIcon}) => {
  return (

      <Button onClick={handleClick} variant={type} startIcon={startIcon}>
        {text}
      </Button>

  );
}

export default CustomButton;
