import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';

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
        width: "69.5%",
        height: "58%",
        backgroundColor: "white",        

      },
      paperlong:{
        width: "100%",
        height: "35%",
        backgroundColor: "white",        

      },
      papersmall:{
        width: "30%",
        height: "28.5%",
        backgroundColor: "white",        

      }
    }));
    

    const data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
      datasets: [
        {
          label: 'Visitors',
          data: [12, 19, 3, 5, 20, 3,4],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(50, 159, 64, 1)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(50, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
     
function Home() {
  const [theme, setTheme] = useState(false);
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
      <Box className={classes.root}>
        <Card className={classes.bg} elevation={0} square>
          <Grid container spacing={0}>
            <Grid item xs={2} >
              <div style={{backgroundColor: "#6A7DA4", width: "100%", height: "100vh"}}>
                <div style={{backgroundColor: "#667798", width: "100%", height: "9vh"}}>
                  Vimra
                </div>
                <Navbar/>
              </div>
            </Grid>
            <Grid item xs={10} >
              <div style={{backgroundColor: "#DBE0EA", width: "100%", height: "9vh"}}>

              </div>
              <div style={{padding: "2%", height: "90vh"}}>
                <Paper style={{float:"left", marginRight: "0.5%", marginBottom: "0.5%"}} className={classes.paperbig} elevation={5} ><Bar style={{padding: "3%"}} data={data}width={2}
                  height={20}
                  options={{ maintainAspectRatio: false }}/>
                </Paper>
                <Paper style={{float:"left", marginBottom: "0.5%"}} className={classes.papersmall} elevation={5} > news</Paper>
                <Paper style={{float:"left", marginBottom: "0.5%"}} className={classes.papersmall} elevation={5} > module status</Paper>
                <Paper style={{float:"left", marginRight: "0.5%", marginBottom: "1%"}} className={classes.paperlong} elevation={5}> 
                  <div style={{backgroundColor: "yellow", width: "12%", height: "60%", float:"left", marginTop: "3.8%"}}> shortcut</div> 
                  <div style={{backgroundColor: "yellow", width: "12%", height: "60%", float:"left"}}> shortcut</div> 
                  <div style={{backgroundColor: "yellow", width: "12%", height: "60%", float:"left"}}> shortcut</div> 
                  <div style={{backgroundColor: "yellow", width: "12%", height: "60%", float:"left"}}> shortcut</div> 

                </Paper>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Box>
  );
}

export default Home;
