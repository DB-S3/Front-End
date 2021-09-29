import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList as List } from 'react-window';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { green } from '@material-ui/core/colors';
import Navbar from './Navbar';

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: "0",
        '& > *': {
          width: "100vw",
          height: "100vh",
        },
      },
      bg: {
        backgroundColor: "#E8EBF5",        
      },
      paperbig:{
        width: "100",
        height: "93.9%",
        backgroundColor: "white",        

      }
    }));
    

function Module(props){
    return <div style={{width: "15%", height: "20%", backgroundColor: "green"}}> {props.name} </div>
}
     
function Modules() {
  const classes = useStyles();
  const [Menu, setTheme] = useState(false);

  return (
      <Box className={classes.root}>
        <Card className={classes.bg} elevation={0} square>
          <Grid container spacing={0}>
            <Grid item xs={2} >
              <div style={{backgroundColor: "#6A7DA4", width: "100%", height: "100vh"}}>
                <div style={{backgroundColor: "#667798", width: "100%", height: "9vh"}}>
                  Vimra
                </div>
                <Navbar></Navbar>
              </div>
            </Grid>
            <Grid item xs={10} >
              <div style={{backgroundColor: "#DBE0EA", width: "100%", height: "9vh"}}>

              </div>
              <div style={{padding: "2%",  height: "90vh"}}>
                <Paper style={{float:"left", marginRight: "0.5%", marginBottom: "0.5%", width: "100%",}} className={classes.paperbig} elevation={5} >
                    <Module name={"module test"}/>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
}

export default Modules;
