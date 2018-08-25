import React, { Component } from 'react'
import {Image} from 'react-bootstrap';
import Modal from 'react-responsive-modal'

const modalStyle = {
  fontFamily: "sans-serif",
  textAlign: "left",
  width: "90%"
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      open: true,
    };
  }

  onOpenModal() {
    this.setState({ open: true });
  }
 
  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
        <div>
          <div className="home-page">
          {/* <Image src={hulkgif} alt={"hulkgif"}/> */}
          <Image src="images/hulkgif.gif" className="image"/>
                   
          <div style={modalStyle}>
        {this.onOpenModal}
        <Modal open={open} onClose={this.onCloseModal} style={modalStyle} >
         {/* eslint-disable-next-line */}
          <div className="modal-header">
       
          <h5>Add your exercise routines and other informational links and create your workout plans</h5>
          <p className="warning">Warning: Due to an error in bootstrap 4, the links aren't working as they should. To open Code and Added workouts, please right click and open in a new tab. I'm working on fixing this.</p>
          </div>
                
        </Modal>
      </div>       
        
          </div>    

    </div>
    
    )
  }
}




 
 