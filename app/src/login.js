import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home Page/home';
import { withStyles } from '@material-ui/core/styles';
import CMSComponent from './Components/cms/CMSComponent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from '@fluentui/react';
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(64),
          height: theme.spacing(72),
        },
      },
    }));
    

function App() {
  const [theme, setTheme] = useState(false);
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="App">
        <header className="App-header">
          <div className={classes.root}>
          <Paper elevation={3} >
            <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            margin="auto"
            mb="auto"
            >
              <TextField id="username" label="Username"  /><br/>
              <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              /><br/>
              
              <Button variant="contained">Login</Button>
              <Link href="#">
                <p style={{fontSize: "1rem"}}>Create Account</p>
              </Link>
              </Grid>
          </Paper>
          </div>
        </header>


    </div>
  );
}

export default App;
