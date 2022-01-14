import React, { useState } from 'react';

import axios from 'axios'
import WebComponent from './WebComponent';

class Website extends React.Component {

    constructor(props){
        super(props);
        this.state={
            dataJson: null
        };


        const instance = axios.create({
            baseURL: 'https://orisy-gateway.azurewebsites.net'
          });
          instance.get('/api/viewsite/'+ window.location.hostname + '/ttt').then(response => this.setState({dataJson: response.data}))
    }


    render() { 
        if(this.state.dataJson == null){
            return <div>
                </div>;
        }
        return <div>
                <div>{this.state.dataJson.objects.map( (object) => <WebComponent key={object.key}  obj={object}/>)}</div>
        </div>;
    }
}
 
export default Website;