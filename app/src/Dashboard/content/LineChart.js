import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
    data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Visits',
            data: [612, 131, 483, 543, 293, 383],
            fill: false,
            backgroundColor: '#7F39FB',
            borderColor: '#7F39FB',
          },
        ],
      };

      options = {            
        elements: {
            point:{
                radius: 0
            }
        },
        plugins: {
            legend: {
                display: false
            },

          }
      };

    render() { 
        return <div style={{width: "85%", margin: "auto", position: 'relative'}}>
            <Line data={this.data} options={this.options}/>
        </div>;
    }
}
 
export default LineChart;