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
          instance.get('/page/viewpage/testpage').then(response => this.setState({dataJson: response.data}))
    }


    
    render() { 
        console.log(this.state.dataJson);
        if(this.state.dataJson == null){
            return <div>
                <TaskBar api={this.instance}/>
                </div>;
        }
        return <div>
                <TaskBar api={this.instance}/>
                <div>{this.state.dataJson.objects.map( (ding) => <CMSComponent key={ding.key} lock={test} obj={ding}/>)}</div>
        </div>;
    }
}
 
export default WebsiteBuilder;