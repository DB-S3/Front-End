import React, { useState } from 'react';
import BarGraphHorizontal from './content/BarGraphHorizontal';
import DoughnutGraph from './content/DoughnutGraph';
import LineChart from './content/LineChart';
import './Dashboard-Home.css'
import './switch.css'
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const notify = (message) => toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  
  return (
    
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="dark"
          />
        <div className={"DashNavBar"}>

        </div>
        <div className={"DashBackground"}>
          <span className={"DashContentHorizontal DashText"}>
            <span className={"DashContentVertical"}>      
            <div className={"DashContentBox"}>
                <p style={{color: "#fff"}}>Quick Settings</p>
                <button onClick={() => notify("Password change mail sent")} className={"Account-Button"}>Change Password</button>
                <label  class="pure-material-switch">
                  <input type="checkbox" onClick={() => notify("Site visibility has been changed")}/>
                  <span>Website</span>
                </label>
              </div>
              <div className={"DashContentBox"}>
                <p style={{color: "#fff"}}>Website Editor</p>

              </div>
            </span>
            <span className={"DashContentVertical"}>      
            < div className={"DashContentBox"}>
                <p style={{color: "#fff"}}>Visits</p>
                <LineChart/>
              </div>
              <div className={"DashContentBox"}>
              <p style={{color: "#fff"}}>To be added</p>

              </div>
            </span>
            <span className={"DashContentVertical"}> 

              <div className={"DashContentBox"}>
                <p style={{color: "#fff"}}>Top Viewed Pages</p>
                <BarGraphHorizontal/>
              </div>
              <div className={"DashContentBox"}>
                <p style={{color: "#fff"}}>Geological Visitors</p>
                <DoughnutGraph/>
              </div>     

            </span>
          </span>


        </div>

      </div>
  );
}

export default Home;
