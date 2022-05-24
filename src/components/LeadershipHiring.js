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
import img1 from '../images/hypeDRM/Group 422.png'
import img2 from '../images/hypeDRM/Group 242.png'
import img3 from '../images/hypeDRM/Group 241.png'
import img7 from '../images/hypeDRM/Group 426.png'

import { BrowserView, MobileView } from 'react-device-detect'
const LeadershipHiring = () => {
  return (
    <div>
      <Navbar btn_color='#FFC600' />
      <BrowserView>
              <div className='row'>
                <div className='col md-1 DRMcol1' >
                                   <img src="images/Leadership Hiri.png" style={{marginLeft:'50px',width:'50vw',height:'476px'}} />

                  <div className='fontLink DRMtitle'>Leadership Hiring
</div>
                  <div className='fontLink DRMdesc'>
                  As per the survey, employees with engaging supervising leaders gets 39 per cent more inclined towards being active. Amidst all the work and chaos, competent workplace leadership is often underrated. Employees tend to look up to their leaders as paragons to the best version of themselves.






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
                  <p className='drm-para'>Leaders not only speak for your company to customers and internal employees but also influences employee productivity. Thence, effective leaders become an important ingredient in embellishing an empire. Through our expertise network, executive hiring experience and market scrutiny, we abet our clients in connecting with befitting leaders for their business. We meticulously single out noteworthy business leaders with a perfect amalgamation of intelligence, maturity and capabilities. 




</p>
                </div>
                <img className='drm-img-bg' src={bgimgdrm} ></img>
              </div>
              {/* <HypeDRM/> */}
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
    <div className="col-3" >
    <img className='ind-we-cater-icon' src={img3} style={{marginBottom:'-3vw'}} ></img>
          <p style={{fontSize:'1.7em',fontWeight:'bold'}}>HR Expertise Guidance </p>

    </div>
  </div>
  <div className="row align-items-center">
    
    
  <div className="col-3" style={{verticalAlign:'middle',marginLeft:'22vw'}}>
    <img className='ind-we-cater-icon'  src={img7} style={{marginBottom:'-3vw'}}></img>
          <p style={{fontSize:'1.7em',fontWeight:'bold'}}>Completes all your hiring</p>

    </div>
  </div>
</div>
              <IndustryWeCater/>
              <TestimonialCar />
              
              </BrowserView>
              <MobileView>
              <div className='fontLink DRMtitle'>Leadership Hiring
 </div>
              
              <div className='fontLink DRMdesc'>
              It might be overwhelming but, nothing feels more of a blessing than seeing your small business accelerating than you can manage. Constant expansion and changes in trends tend to surpass a business ability to hire full-time employees. In circumstances like these, part-time hiring comes to the rescue. With an abundance of benefits, if utilise your personnel sagely, a part-time workforce can help you grow your business tenfold.

 


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
                  <p className='drm-para'>As per the survey, employees with engaging supervising leaders gets 39 per cent more inclined towards being active. Amidst all the work and chaos, competent workplace leadership is often underrated. Employees tend to look up to their leaders as paragons to the best version of themselves.





</p>
                </div>
                <HypeDRM/>
                <IndustryWeCater />
                <TestimonialCar/>
              </MobileView>
    </div>
  )
}

export default LeadershipHiring