import React, { Component } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { TextField} from '@fluentui/react'

class Home extends Component {
    state = {  }
    render() { 
        return ( <div >

                        <div style={{ backgroundColor: "white", padding: "10px", borderRadius:"5px"}} class="ms-Grid" dir="ltr">
                            <div class="ms-Grid-row">
                            <TextField label="With placeholder" placeholder="Username" />
                            </div>
                            <div class="ms-Grid-row">
                            <TextField label="With placeholder" placeholder="Username" />
                            </div>
                            <PrimaryButton text={"Login"}/>
                        </div>
        </div> );
    }
}
 
export default Home;