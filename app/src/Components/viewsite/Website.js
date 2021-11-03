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
            baseURL: 'http://localhost:5000'
          });
          instance.get('/page/viewpage/'+ window.location.hostname + '/testpage').then(response => this.setState({dataJson: response.data}))
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