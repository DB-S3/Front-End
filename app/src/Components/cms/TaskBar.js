import React from 'react';
import axios from 'axios'

function TaskBar(props) {
  var data = props.obj;

  function changeOption(id){
    console.log(data.x)
    props.changeObjFunction(id, data);
  }
  
    return (
      <div>
        <span style={{display: 'flex', position: 'fixed', zIndex: "+1",flexDirection: 'column', width: "10vw", height: "100vh", backgroundColor: 'white'}}>
          <a onClick={() => axios.create({
            baseURL: 'http://localhost:5000'
          }).get('/api/object/editOptions',
          "\"" + JSON.stringify(data) + "\""
           ).then(response => console.log(response)) }>Save</a>

          
          <label for="fname">X: </label><br/>
          <input type="number" value={props.obj ? props.obj.x : 0} onChange={(event) => {data.x =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.x);}}  id="fname" name="fname"/>
          <select name="unit" id="unit" value={props.obj ? props.obj.xUnit : 0} onChange={(event) => {data.xUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="fname">Y: </label><br/>
          <input type="number" value={props.obj ? props.obj.y : 0} id="fname" onChange={(event) => {data.y =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.y);}} name="fname"/>
          <select name="unit" id="unit" value={props.obj ? props.obj.yUnit : 0} onChange={(event) => {data.yUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label  for="fname">Width: </label><br/>
          <input value={props.obj ? props.obj.width : 0} onChange={(event) => {data.width =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.width);}} type="number" id="fname" name="fname"/>
          <select name="unit" id="unit" value={props.obj ? props.obj.widthUnit : 0} onChange={(event) => {data.widthUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
            <option value="px">px</option>
            <option value="vw">vw</option>
            <option value="%">%</option>
          </select><br/>
          <label for="fname">Height: </label><br/>
          <input value={props.obj ? props.obj.height : 0} onChange={(event) => {data.height =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.width);}} type="number" id="fname" name="fname"/>
          <select name="unit" id="unit" value={props.obj ? props.obj.heightUnit : 0} onChange={(event) => {data.heightUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
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
          <input type="color" id="favcolor" name="favcolor" value={props.obj ? props.obj.backgroundColor : '#fff'} onChange={(event) => {data.backgroundColor =+ event.target.value; props.changeObjFunction(props.obj.objectId, data); console.log(data.width);}}></input><br/>
        </span>
      </div>
    );
  }
  
  export default TaskBar;