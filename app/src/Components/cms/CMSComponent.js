import React, { useState } from 'react';


function CMSComponent(props) {    
    if(props.children != null){
        console.log("length " + props.children.length);
        return ( <div>{props.content}
            {props.children.map(child => {
                <CMSComponent children={null} content={child}/>
            })}
        </div> );
    } else {
        return ( <div dangerouslySetInnerHTML={{__html: props.content}}></div> );
    }
    
    


}
export default CMSComponent;