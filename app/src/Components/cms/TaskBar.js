import React from 'react';
import axios from 'axios';
import './input.css';
function TaskBar(props) {
  var data = props.obj;

  function changeOption(id){
    props.changeObjFunction(id, data);
  }
    return (
      <div>
        <span style={{display: 'flex', position: 'fixed', zIndex: "+1",flexDirection: 'column', width: "10vw", height: "100vh", backgroundColor: '#f8f9fb', visibility: props.visible ? "visible" : "hidden"}}>
          <div className={"input-box"}>
            <p>Options</p>
            <p>x</p>
          </div>
          <div className={"input-box"}>
            <label className={"label-for-input"} for="fname">X position: </label><br/>
            <input type="number" className={"input-textfield"} value={props.obj ? props.obj.x : 0} onChange={(event) => {data.x =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.x);}}  id="fname" name="fname"/>
            <select name="unit" className={"input-selectbox"} id="unit" value={props.obj ? props.obj.xUnit : "px"} onChange={(event) => {data.xUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
              <option value="px">px</option>
              <option value="vw">vw</option>
              <option value="%">%</option>
            </select>
          </div>
          
          <div className={"input-box"}>
          <label className={"label-for-input"} for="fname">Y position: </label><br/>
            <input type="number" className={"input-textfield"} value={props.obj ? props.obj.y : 0} id="fname" onChange={(event) => {data.y =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.y);}} name="fname"/>
            <select name="unit" className={"input-selectbox"} id="unit" value={props.obj ? props.obj.yUnit : "px"} onChange={(event) => {data.yUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
              <option value="px">px</option>
              <option value="vh">vh</option>
              <option value="%">%</option>
            </select>
          </div>
          <div className={"input-box"}>
            <label className={"label-for-input"}  for="fname">Width: </label><br/>
            <input className={"input-textfield"} value={props.obj ? props.obj.width : 0} onChange={(event) => {data.width =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.width);}} type="number" id="fname" name="fname"/>
            <select name="unit" className={"input-selectbox"} id="unit" value={props.obj ? props.obj.widthUnit : "px"} onChange={(event) => {data.widthUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
              <option value="px">px</option>
              <option value="vw">vw</option>
              <option value="%">%</option>
            </select>
          </div>
          <div className={"input-box"}>
            <label className={"label-for-input"}  for="fname">Height:</label><br/>
            <input className={"input-textfield"} value={props.obj ? props.obj.height : 0} onChange={(event) => {data.height =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.width);}} type="number" id="fname" name="fname"/>
            <select name="unit" className={"input-selectbox"} id="unit" value={props.obj ? props.obj.heightUnit : "px"} onChange={(event) => {data.heightUnit = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
              <option value="px">px</option>
              <option value="vh">vh</option>
              <option value="%">%</option>
            </select>
          </div>
          <div className={"input-box"}>
          <label className={"label-for-input"} for="fname">Positon: </label><br/>
            <select className={"input-textfield-full"} name="unit" id="unit" value={props.obj ? props.obj.position : "fixed"} onChange={(event) => {data.position = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}>
              <option value="fixed">Fixed</option>
              <option value="relative">Relative</option>
            </select>
          </div>
          <div className={"input-box"}>
            <label className={"label-for-input"}  for="fname">Border Radius:</label><br/>
            <input className={"input-textfield"} type="number" value={props.obj ? props.obj.borderRadius : 0} onChange={(event) => {data.borderRadius =+ event.target.valueAsNumber; props.changeObjFunction(props.obj.objectId, data); console.log(data.width);}} id="fname" name="fname"/>
            <select name="unit" className={"input-selectbox"} id="unit">
              <option value="px">px</option>
              <option value="vw">vw</option>
              <option value="%">%</option>
            </select>
          </div>
          <div className={"input-box"}>
            <label className={"label-for-input"} for="favcolor">Colour:</label><br/>
            <input className={"input-colorpicker"} type="color" id="favcolor" name="favcolor" value={props.obj ? props.obj.colour : '#000'} onChange={(event) => {data.colour = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}></input>
          </div>
          <div className={"input-box"}>
            <label className={"label-for-input"} for="favcolor">Background colour:</label><br/>
            <input className={"input-colorpicker"} type="color" id="favcolor" name="favcolor" value={props.obj ? props.obj.backgroundColour : '#fff'} onChange={(event) => {data.backgroundColour = event.target.value; props.changeObjFunction(props.obj.objectId, data);}}></input>
          </div>
          <a className={"input-setbottom input-savebutton input-box"} onClick={() => axios.create({
            baseURL: 'http://localhost:5000'
          }).post('/api/object/editOptions',
          data
           ).then(response => console.log(response))}>Save</a>
        </span>
      </div>
    );
  }
  
  export default TaskBar;