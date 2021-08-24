
import './App.css';
import { useState } from 'react';
import ModalDialog from './ModalDialog';
import ModalDialog2 from './ModalDialog2';



function App() {





// HELPER FOR SIGN UP START HERE 

  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  // HELPER FOR SIGN UP END HERE 






  // HELPER FOR LOGIN START HERE 
// declare a new state variable for modal open
const [open2, setOpen2] = useState(false);

// function to handle modal open
const handleOpen2 = () => {
  setOpen2(true);
};

// function to handle modal close
const handleClose2 = () => {
  setOpen2(false);
};
  // HELPER FOR LOGIN END HERE
  
  

  return (
    <div className="App">
     
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EDTECH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TUTORS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MY CLASS</a>
        </li>
      </ul>
      <span className="navbar-text">
        
        <button type="button" class="btn btn-dark" onClick={handleOpen}>SIGN UP</button>
        {/* // display the modal and pass props */}
      <ModalDialog open={open} handleClose={handleClose} />
        
        <span> </span>
        <span></span>
        <button type="button" class="btn btn-dark" onClick={handleOpen2}>LOGIN</button>
        <ModalDialog2 open2={open2} handleClose2={handleClose2} />
      </span>
    </div>
  </div>
</nav>
     
     
    </div>
  );
}

export default App;
