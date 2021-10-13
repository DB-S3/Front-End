import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { getPropsWithDefaults } from '@fluentui/utilities';
import axios from 'axios'

function TaskBar(props) {
  var test = 0;
  var data = {
    "id": "33d56a0a-b733-4113-b5ff-3f34e118d80c",
    "objectId": "3234c9ed-baaf-47c2-a7e6-94f8fd0a4b72",
    "x": 0,
    "xUnit": null,
    "y": 0,
    "yUnit": null,
    "height": 100,
    "heightUnit": "px",
    "width": 100,
    "widthUnit": "vw",
    "colour": "green",
    "backgroundColour": "#e0deda",
    "borderRadius": null,
    "text": null,
    "path": null,
    "position": "relative"
};
    return (
      <div>
        <span style={{display: 'flex', position: 'fixed', zIndex: "+1",flexDirection: 'column', width: "10vw", height: "100vh", backgroundColor: 'white'}}>
          <p style={{width: "100%"}}>Edit</p>
          <a onClick={() => axios.create({
            baseURL: 'http://localhost:5000'
          }).get('/api/object/editOptions',
          "\"" + JSON.stringify(data) + "\""
           ).then(response => console.log(response)) }>Save</a>

          
          <label for="fname">X: </label><br/>
          <input type="text" id="fname" name="fname"/>
          <select name="unit" id="unit">
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="fname">Y: </label><br/>
          <input type="text" id="fname" name="fname"/>
          <select name="unit" id="unit">
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="fname">Width: </label><br/>
          <input type="text" id="fname" name="fname"/>
          <select name="unit" id="unit">
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="fname">Height: </label><br/>
          <input type="text" id="fname" name="fname"/>
          <select name="unit" id="unit">
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="fname">Positon: </label><br/>
          <select name="unit" id="unit">
            <option value="fixed">fixed</option>
            <option value="relative">relative</option>
          </select><br/>
          <label for="fname">Border Radius: </label><br/>
          <input type="text" id="fname" name="fname"/>
          <select name="unit" id="unit">
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="favcolor">Colour</label>
          <input type="color" id="favcolor" name="favcolor"></input><br/>
          <label for="favcolor">background Colour</label>
          <input type="color" id="favcolor" name="favcolor"></input><br/>
        </span>
      </div>
    );
  }
  
  export default TaskBar;