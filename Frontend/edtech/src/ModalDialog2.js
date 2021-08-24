import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Login from './Login';

const ModalDialog = ({ open2, handleClose2 }) => {
  return (
    // props received from App.js
    <Dialog open={open2} onClose={handleClose2}>

     {/* <SignUp /> */}
      <Login handleClose2={handleClose2} />
    </Dialog>
  );
};

export default ModalDialog;