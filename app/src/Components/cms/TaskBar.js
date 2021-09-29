import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
function TaskBar() {
  var test = 0;
    return (
      <div >
        <Button style={{float: "right", textTransform: "none"}} variant="contained" color="primary" disableElevation>
          Back
        </Button>
        <div style={{float: "left"}}>
        
          <p style={{margin: "0px"}}>Selected Element</p>

        </div><br/>
        <div style={{float: "left"}}>
          <Button style={{  textTransform: "none"}}>New</Button>
          <Button style={{  textTransform: "none"}}>Edit</Button>
          <Button style={{  textTransform: "none"}}>Modules</Button>
          <Button style={{  textTransform: "none"}}>Mobile</Button>
          <Button style={{  textTransform: "none"}}>Desktop</Button>
        </div>

        <Divider style={{width: "100%"}} />
        <div style={{float: "left"}}>
          <Button style={{  textTransform: "none"}}>Text</Button>
          <Button style={{  textTransform: "none"}}>Panel</Button>
          <Button style={{  textTransform: "none"}}>Form</Button>
          <Button style={{  textTransform: "none"}}>Image</Button>
          <Button style={{  textTransform: "none"}}>Button</Button>
          <Button style={{  textTransform: "none"}}>Icon</Button> 
        </div>
        <Divider style={{width: "100%"}} />


      </div>
    );
  }
  
  export default TaskBar;