import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarGraphHorizontal extends React.Component {
    state = {
        bar1: 200,
        bar2: 150,
        bar3: 15,
        bar4: 60,
        barName1: "Home",
        barName2: "Home",
        barName3: "Home",
        barName4: "Home"
    }

    options = {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
              enabled: false
            },
          }
      };

    data = {
        labels: ['Home', 'Contact', 'Collage', 'Blog post 1', 'Blog post 2', 'Blog post 3'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#7F39FB',
              '#7F39FB',
              '#7F39FB',
              '#7F39FB',
              '#7F39FB',
              '#7F39FB',
            ],
            borderColor: [
                '#7F39FB',
                '#7F39FB',
                '#7F39FB',
                '#7F39FB',
                '#7F39FB',
                '#7F39FB',
            ],
            borderWidth: 10,
          },
        ],
      };

    render() { 
        return <div style={{width: "85%", margin: "auto", position: 'relative'}}>
                    <Bar data={this.data} options={this.options} />
               </div>;
    }
}
 
export default BarGraphHorizontal;