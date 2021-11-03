import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

class DoughnutGraph extends React.Component {

    data = {
        labels: ['Netherlands', 'Sweden', 'Belgium', 'Poland', 'Spain', 'Italy'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#6739b7',
                '#7440ce',
                '#8e59e8',
                '#9a6cea',
                '#a77eed',
                '#b391ef',
            ],
            borderColor: [
                '#6739b7',
                '#7440ce',
                '#8e59e8',
                '#9a6cea',
                '#a77eed',
                '#b391ef',
            ],
            borderWidth: 1,
          },
        ],
      };

      options = {            
        responsive: false,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'left',
                align: 'center'
            },

          }
      };
    render() { 
        return <div style={{width: "85%", margin: "auto", position: 'relative'}}>
                <Doughnut style={{margin: "auto"}} width={"400px"} height={"250px"} data={this.data} options={this.options} />

        </div>;
    }
}
 
export default DoughnutGraph;