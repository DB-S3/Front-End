import React from 'react';
import Page from './Page';
import WebsiteBuilder from './WebsiteBuilder';

class CMS extends React.Component {
    constructor(){
        super();
        this.state={
            page: true,
            currentPage: ""
        }  
    }

    disableTaskbar = (page) => {
        this.setState({currentPage: page, page: false});
    }
    
    render() { 
        if(this.state.page == false){
            return <WebsiteBuilder pageId={this.state.currentPage}/>;
        } else {
            return <Page disableTaskbar={this.disableTaskbar}/>;
        }
        
    }
}
 
export default CMS;