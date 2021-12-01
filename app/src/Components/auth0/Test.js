import React from 'react';
import AuthService from './AuthService';
import Axios from 'axios';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {bookList: ''};
    }
  
   

    componentDidMount() {
        const accessToken = this.props.auth.getAccessToken();
        console.log(accessToken);
        fetch("https://localhost:5001/api/auth", {
            mode:"no-cors",
            headers: new Headers({
            "Accept": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })})
            .then(response => response.json())
            .then(books => this.setState({bookList: books}))
            .catch(error => console.log(error))
      }
  
    render() {
      let bookList = <p>{this.state.bookList}</p>
  
      return <ul>
        {bookList}
      </ul>;
    }
  }
  
  export default Test;