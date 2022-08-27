import {useEffect} from 'react';
import React,{Component} from "react";
import { NavBarComponent } from './NavBarHtml';
import './PendingBeardRequestStyle.css'
import backgroundImg from '../Images/paperImage.jpg'


function PendingBeardRequest() {
   
    useEffect(() => {
        fetch('http://127.0.0.1:8080/getGafCommanderPendingRequests')
        .then(response => response.json())
        .then(data => console.log(data[0].personalId));
    });

    return <div className="PendingBeardRequest">
        <NavBarComponent/>
        <>
  <meta charSet="UTF-8" />
  <div className="job">
    <div className="wrapper">
     
      <div className="detail-page">
        <div className="main-container">
          <div className="searched-jobs">
            <div className="job-overview">
              <div className="job-explain">
                <img className="job-bg" src={backgroundImg} />
                <div className="job-logos">
                </div>
                <div className="job-explain-content">
                  <div className="job-title-wrapper">
                    <div className="job-card-title">בקשת פטור ממתינה לאישור</div>
                    <div className="job-action">
                     
                    </div>
                  </div>
                  
                  <div className="explain-bar">
                    <div className="explain-contents">
                      <div className="explain-title">מספר אישי מבקש</div>
                      <div className="explain-subtitle">9030343</div>
                    </div>
                    <div className="explain-contents">
                      <div className="explain-title">סוג הבקשה</div>
                      <div className="explain-subtitle">פטור זקן דתי</div>
                    </div>
                    <div className="explain-contents">
                      <div className="explain-title">שם גף</div>
                      <div className="explain-subtitle">tikshov</div>
                    </div>
                    <div className="explain-contents">
                      <div className="explain-title">תאריך בקשה</div>
                      <div className="explain-subtitle">20/05/2002</div>
                    </div>
                  </div>
                  <div className="overview-text">
                    <div className="overview-text-header">תיאור הבקשה</div>
                    <div className="overview-text-subheader">
                      We believe that design (and you) will be critical to the
                      company's success. You will work with our founders and our
                      early customers to help define and build our product
                      functionality, while maintaining the quality bar that
                      customers have come to expect from modern SaaS
                      applications. You have a strong background in product
                      design with a quantitavely anf qualitatively analytical
                      mindset. You will also have the opportunity to craft our
                      overall product and visual identity and should be
                      comfortable to flex into working.
                    </div>
                  </div>
                  <div className="overview-text">
                    <div className="overview-text-header">דרישות לקבלת הפטור המבוקש</div>
                    <div className="overview-text-item">
                      3+ years working as a product designer.
                    </div>
                    <div className="overview-text-item">
                      A portfolio that highlights your approach to problem
                      solving, as well as you skills in UI.
                    </div>
                    <div className="overview-text-item">
                      Experience conducting research and building out smooth
                      flows.
                    </div>
                    <div className="overview-text-item">
                      Excellent communication skills with a well-defined design
                      process.
                    </div>
                    <div className="overview-text-item">
                      Familiarity with design tools like Sketch and Figma
                    </div>
                    <div className="overview-text-item">
                      Up-level our overall design and bring consistency to
                      end-user facing properties
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>;
  }

export default PendingBeardRequest