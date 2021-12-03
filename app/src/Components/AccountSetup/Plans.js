import React from 'react';
import plans from './plans.css'
import wave from './test.svg'
class Plans extends React.Component {
    render() { 
        return <div className={"plans-page"}>
                <div className={"plan-container"}>
                    <div className={"plan-box colour-b288fd"}>
                        <span>Starter</span><br/>
                        <span>€ 5</span>
                        <img className={"svg-plan"} src={wave}/>
                        <div className={"plans-bottom-box"}>
                            <p>20 pages</p>
                            <p>2 GB storage</p>
                            <p>Ortisy domain</p>
                            <button className={"plans-button"}>Select</button>
                        </div>
                    </div>
                    <div className={"plan-box colour-9961fc"}>
                        <span>Pro</span><br/>
                        <span>€ 12</span>
                        <img className={"svg-plan"} src={wave}/>
                        <div className={"plans-bottom-box"}>
                            <p>50 pages</p>
                            <p>10 GB storage</p>
                            <p>Custom domain</p>
                            <button className={"plans-button"}>Select</button>
                        </div>
                    </div>
                    <div className={"plan-box colour-7f39fb"}>
                        <span>Enterprise</span><br/>
                        <span>€ 30</span>    
                        <img className={"svg-plan"} src={wave}/>
                        <div className={"plans-bottom-box"}>
                            <p>Unlimited pages</p>
                            <p>25 GB storage</p>
                            <p>Custom domain</p>
                            <button className={"plans-button"}>Select</button>
                        </div>
                    </div>
                </div>
        </div>;
    }
}
 
export default Plans;