import React, { Component } from 'react'
import { Grid, Row, Col, Image,ProgressBar } from 'react-bootstrap';
// import hulkgif from 'images/hulkgif.gif'


export default class Home extends Component {
  render() {
    return (
        <div>
          <div className="home-page">
          {/* <Image src={hulkgif} alt={"hulkgif"}/> */}
          <Image src="images/hulkgif.gif" className="image"/>
                   
          
             <p className="centered">Go ahead and add your exercises and informational links and create your own workout plans.</p> 
          
        
          </div>    

    </div>
    
    )
  }
}
