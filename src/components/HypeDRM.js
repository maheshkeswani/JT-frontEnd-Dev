import React from 'react'
import img1 from '../images/hypeDRM/Group 422.png'
import img2 from '../images/hypeDRM/Group 242.png'
import img3 from '../images/hypeDRM/Group 241.png'
import img4 from '../images/hypeDRM/Group 423.png'
import img5 from '../images/hypeDRM/Group 424.png'
import img6 from '../images/hypeDRM/Group 425.png'
import img7 from '../images/hypeDRM/Group 426.png'
import img8 from '../images/hypeDRM/Group 427.png'
const HypeDRM = () => {
  return (
    <div>
              <div className='fontLink ind-we-cater1'>WHAT'S THE HYPE BEHIND JOB TERRITORY'S DRM</div>
              <div className="fontlink container" style={{color:"#535353"}}>
  <div className="row align-items-start">
    <div className="col-3" style={{marginRight:'5vw'}}>
      <img className='ind-we-cater-icon' src={img1}></img>
      <h3>Hire as many as you want through monthly </h3>
    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img2} ></img>
          <h3>Get a privilege to choose the best resources and personnel for your Company </h3>

    </div>
    <div className="col-3">
    <img className='ind-we-cater-icon' src={img3} ></img>
          <h3>HR Expertise Guidance </h3>

    </div>
  </div>
  <div className="row align-items-center">
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img4} ></img>
          <h3>No more middleman; interact with your dedicated   </h3>

    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img5}></img>
          <h3>Exclusively skilled personnel {"&"} resources are set aside for your  </h3>

    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img6} ></img>
          <h3>No long term Contract</h3>

    </div>
  </div>
  <div className="row align-items-end">
    <div className="col-3" style={{marginRight:'5vw', marginLeft:'10vw'}}>
    <img className='ind-we-cater-icon'  src={img7} ></img>
          <h3>Completes all your hiring</h3>

    </div>
    <div className="col-3" style={{marginRight:'5vw'}}>
    <img className='ind-we-cater-icon' src={img8} ></img>
          <h3>Nominal budget with
     lowered fill time</h3>

    </div>
  </div>
</div>
    </div>
  )
}

export default HypeDRM ;