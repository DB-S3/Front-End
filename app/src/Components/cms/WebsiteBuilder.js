import React, { useState } from 'react';
import { Data } from './data';
import CMSComponent from './CMSComponent';
import TaskBar from './TaskBar';
import axios from 'axios'

function test(){}

function addObj(data){
    return  

}

function NewCMSObject(){

}

class WebsiteBuilder extends React.Component {

    constructor(props){
        super(props);
        this.state={
            dataJson: null,
            currentObj: null,
            objOptions: false,        };

        console.log(props.pageId);
        const instance = axios.create({
            baseURL: 'https://orisy-gateway.azurewebsites.net'
          });
          instance.get('/api/viewpage/'+ props.pageId).then(response => this.setState({dataJson: response.data}))
    }

    disableTaskbar = () => {
        this.setState({objOptions: false});
    }

    setCurrentObject = (newObj) => {
        this.setState({currentObj: newObj, objOptions: true});
        console.log(this.state.currentObj);
    }
    
    optionsChange = (id, newOptions) => {
        this.findObj(this.state.dataJson.objects,id, newOptions )
    }

    findObj(obj, id, newOptions){
        for(let i = 0; obj.length; i++){
            if(obj[i].key == id){
                obj[i].options = newOptions; 
                break;               
            }

            if(obj[i].children.length > 0){
                this.findObj(obj[i].children, id)
            }

        }
        this.setState(prevState => ({
            dataJson: {                   // object that we want to update
                ...prevState.dataJson,    // keep all other key-value pairs
                objects: obj      // update the value of specific key
            }}))
    }

    render() { 
        if(this.state.dataJson == null){
            return <div>
                </div>;
        }
        return <div>
                <TaskBar visible={this.state.taskbarVisible} objList={this.state.dataJson.objects} objOptions={this.state.objOptions} disableTaskbar={this.disableTaskbar} changeObjFunction={this.optionsChange} obj={this.state.currentObj}/>
                <div>{this.state.dataJson.objects.map( (object) => <CMSComponent setCurrentObject={this.setCurrentObject} key={object.key} lock={test} obj={object}/>)}</div>
                <span onClick={()=> this.setState({taskbarVisible: true})} style={{left: "0px", position: 'fixed', height: "75px", width: "30px", backgroundColor: "green", top: "30vh"}}></span>
        </div>;
    }
}
 
export default WebsiteBuilder;