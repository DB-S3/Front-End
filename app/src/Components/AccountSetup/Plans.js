import React from 'react';
import plans from './plans.css'
import wave from './test.svg'
class Plans extends React.Component {
    render() { 
        return <div className={"plans-page"}>
                <div className={"plan-container"}>
                    <div className={"plan-box colour-b288fd"}>
                        <p className={"plan-text"}>Starter</p>
                        <p className={"price-text"}>€ 5</p>
                        <img className={"svg-plan"} src={wave}/>
                        <div className={"plans-bottom-box"}>
                            <p>20 pages</p>
                            <p>2 GB storage</p>
                            <p>Ortisy domain</p>
                            <button className={"plans-button"}>Select</button>
                        </div>
                    </div>
                    <div className={"plan-box colour-9961fc"}>
                        <p className={"plan-text"}>Pro</p>
                        <p className={"price-text"}>€ 12</p>
                        <img className={"svg-plan"} src={wave}/>
                        <div className={"plans-bottom-box"}>
                            <p>50 pages</p>
                            <p>10 GB storage</p>
                            <p>Custom domain</p>
                            <button className={"plans-button"}>Select</button>
                        </div>
                    </div>
                    <div className={"plan-box colour-7f39fb"}>
                        <p className={"plan-text"}>Enterprise</p>
                        <p className={"price-text"}>€ 30</p>    
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