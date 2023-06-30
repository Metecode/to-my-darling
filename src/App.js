import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [mylove, setMyLove] = useState(100);
  const [open, setOpen] = useState(false);
  const increase = () => {
    setMyLove((mylove) => mylove + 1);
  };

  const imposible = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <h1>
        Sana olan sevgim: <span>{mylove}</span>
      </h1>
      <div>
        <Button style={{margin:"2px"}} variant="contained" onClick={increase}>
          ARTTIR
        </Button>
        <Button variant="contained"  onClick={imposible}>AZALT</Button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            İMKANSIZ!!!!!!!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
