import React from 'react';
import siteNamePicker from './siteNamePicker.css'
class SiteNamePicker extends React.Component {
    render() { 
        return <div className={"siteNamePicker-page"}>
            <div className={"siteNamePicker-box colour-b288fd"}>
            <input className={"Input-siteNamePicker"}></input>

            <div className={"siteNamePicker-box-inner"}>
            <button className={"siteNamePicker-continuebutton"}>Continue</button>
            </div>
            </div>
        </div>;
    }
}
 
export default SiteNamePicker;