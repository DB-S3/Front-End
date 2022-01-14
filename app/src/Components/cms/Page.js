import React from 'react';
import css from "./Page.css"
import SettingsIcon from '@mui/icons-material/Settings';
import axios from 'axios';

class Page extends React.Component {
    constructor(){
        super();
        this.state={
            dataJson: []
        }
        const instance = axios.create({
            baseURL: 'https://orisy-gateway.azurewebsites.net'
          });
          instance.get('/api/getpagelist').then(response => this.setState({dataJson: response.data}))
    }

    pageItem(x){
        return <div onClick={() => this.props.disableTaskbar(x.id)} className={"Page-item"}><p className={"Page-item-name"}>{x.name}</p> <SettingsIcon className={"Page-item-settings-icon"} sx={{Color: "#fff"}}/></div>;
    }
    render() { 
        return <div className={"DashBackground"}>
            <div className={"Page-Panel"}>  {this.state.dataJson.map(x => this.pageItem(x))}  <button className={"panew-button"}>New</button></div> 
        </div>;
    }
}
 
export default Page;