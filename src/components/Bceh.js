import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../Navbar'
import bgimgdrm from '../images/bgimgdrm.png'
import TestimonialCar from './TestimonialCar'
import '../App.css'
import IndustryWeCater from './IndustryWeCater'
import bgImg from "../images/bgImg.png"
import HypeDRM from './HypeDRM'
import OurClients from './OurClients'
import { BrowserView, MobileView } from 'react-device-detect'
import img1 from '../images/hypeDRM/Group 422.png'
import img2 from '../images/hypeDRM/Group 242.png'
import img4 from '../images/hypeDRM/Group 423.png'

const Bceh = () => {
  return (
    <div>
      <Navbar btn_color='#FFC600' />
      <BrowserView>
              <div className='row'>
                <div className='col md-1 DRMcol1' >
                  <img src="images/Bluecollar Empl.png" style={{marginLeft:'50px',width:'50vw',height:'476px'}} />
                  <div className='fontLink DRMtitle'>BLUE-COLLAR EMPLOYEE HIRING</div>
                  <div className='fontLink DRMdesc'>
                  Applicants applying for blue-collar jobs normally come with unformatted & undetailed resumes. Thus, making it difficult for you to make a decision. It’s no secret that middlemen or agencies often create barriers between an employer and a job seeker to exploit both of them to make more money. The current situation in the blue-collar industry has tremendously improved through government initiatives such as Make in India, Digital India, Startup India and Skill India. Taking it forward, Jobs Territory has come up with Blue-Collar recruiting service. 


                  </div>

                </div>
                <div className='col md-1'>
                  <div className='list-container'>
                    <div className='list-heading'>How JT can help you fulfill your job 
requirements</div>
                    <ul>
                      <li class="bi bi-check-circle-fill list-item">Allocates  you the best candidate 
as per your project requirement 
through our huge database
</li>
<li class="bi bi-check-circle-fill list-item">Saves your time by taking care of
everything during the whole 
hiring process.

</li>
<li class="bi bi-check-circle-fill list-item" >Conducts thorough background
checks when considering 
potential employees

</li>
<li class="bi bi-check-circle-fill list-item" >Our expertise and market 
knowledge proves to be priceless
</li>
<li class="bi bi-check-circle-fill list-item" >Negotiates on behalf of both 
parties to reach a mutual 
agreement
</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div class='row' className='fontLink'>
                <div className='col md-1 drm-desc-container'>
                  <div className='drm-heading'>WHY SHOULD YOU OPT FOR IT</div>
                  <p className='drm-para'>The professions' labour markets are wrecked up with plenty of jobs with the shifty talent to fill. With these constant obstacles, hiring blue-collar workers might be a tedious task. This can be made easy by opting for blue-collar employee hiring services with the help of the right recruitment agency. Thence, ensuring you a proper operation of the business.


</p>
                </div>
                <img className='drm-img-bg' src={bgimgdrm} ></img>
              </div>
              {/* <HypeDRM/> */}
               <div>
              <div className='fontLink ind-we-cater1'>WHAT'S THE HYPE BEHIND JOB TERRITORY'S DRM</div>
              <div className="fontlink container" style={{color:"#535353"}}>
  <div className="row align-items-start">
    <div className="col-3" style={{marginRight:'5vw'}}>
      <img className='ind-we-cater-icon' src={img1} style={{marginBottom:'-3vw'}}></img>
      <p style={{fontSize:'1.7em',fontWeight:'bold'}}>Hire as many as you want through monthly </p>
    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img2} style={{marginBottom:'-3vw'}} ></img>
          <p style={{fontSize:'1.7em',fontWeight:'bold'}}>Get a privilege to choose the best resources and personnel for your </p>

    </div>
      <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img4}  style={{marginBottom:'-3vw'}}></img>
          <p style={{fontSize:'1.7em',fontWeight:'bold'}}>No more middleman; interact with your dedicated   </p>

  </div>
  </div>
</div>
    </div>
              <IndustryWeCater/>
              <TestimonialCar />
              
              </BrowserView>
              <MobileView>
              <div className='fontLink DRMtitle'>BLUE-COLLAR EMPLOYEE HIRING </div>
              
              <div className='fontLink DRMdesc'>
              Applicants applying for blue-collar jobs normally come with unformatted & undetailed resumes. Thus, making it difficult for you to make a decision. It’s no secret that middlemen or agencies often create barriers between an employer and a job seeker to exploit both of them to make more money. The current situation in the blue-collar industry has tremendously improved through government initiatives such as Make in India, Digital India, Startup India and Skill India. Taking it forward, Jobs Territory has come up with Blue-Collar recruiting service. 


                  </div>
                  <div className='list-container'>
                    <div className='list-heading'>How JT can help you fulfill your job 
requirements</div>
                    <ul>
                      <li class="bi bi-check-circle-fill list-item">Allocates  you the best candidate 
as per your project requirement 
through our huge database
</li>
<li class="bi bi-check-circle-fill list-item">Saves your time by taking care of
everything during the whole 
hiring process.

</li>
<li class="bi bi-check-circle-fill list-item" >Conducts thorough background
checks when considering 
potential employees

</li>
<li class="bi bi-check-circle-fill list-item" >Our expertise and market 
knowledge proves to be priceless
</li>
<li class="bi bi-check-circle-fill list-item" >Negotiates on behalf of both 
parties to reach a mutual 
agreement
</li>

                    </ul>
                  </div>
                <div style={{backgroundImage:`url(${bgImg})`, paddingBottom:'5vw'}} >
                <div className='drm-heading'>WHY SHOULD YOU OPT FOR IT</div>
                <img className='drm-img-bg' src={bgimgdrm} ></img>
                  <p className='drm-para'>The professions' labour markets are wrecked up with plenty of jobs with the shifty talent to fill. With these constant obstacles, hiring blue-collar workers might be a tedious task. This can be made easy by opting for blue-collar employee hiring services with the help of the right recruitment agency. Thence, ensuring you a proper operation of the business.


</p>
                </div>
                <HypeDRM/>
                <IndustryWeCater />
                <TestimonialCar/>
              </MobileView>
    </div>
  )
}

export default Bceh