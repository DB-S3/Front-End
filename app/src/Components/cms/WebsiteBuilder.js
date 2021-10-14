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
            currentObj: null
        };


        const instance = axios.create({
            baseURL: 'http://localhost:5000'
          });
          instance.get('/page/viewpage/test').then(response => this.setState({dataJson: response.data}))
    }

    setCurrentObject = (newObj) => {
        this.setState({currentObj: newObj});
        console.log(this.state.currentObj);
    }
    
    optionsChange = (id, newOptions) => {
        this.findObj(this.state.dataJson.objects,id, newOptions )
    }

    findObj(obj, id, newOptions){
        for(let i = 0; obj.length -1; i++){
            if(obj[i].key == id){
                obj[i].options = newOptions;
                console.log(this.state.dataJson);
                
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
                <TaskBar obj={this.state.currentObj}/>
                </div>;
        }
        return <div>
                <TaskBar changeObjFunction={this.optionsChange} obj={this.state.currentObj}/>
                <div>{this.state.dataJson.objects.map( (object) => <CMSComponent setCurrentObject={this.setCurrentObject} key={object.key} lock={test} obj={object}/>)}</div>
        </div>;
    }
}
 
export default WebsiteBuilder;