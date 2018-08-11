import React, { Component } from 'react'
import { Grid,Row } from 'react-bootstrap';
// import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutme">
        <Grid>
          <Row className="background">
            <h1>Some Background</h1>
            <p>I've several years of experience working in Food and Drug testing for NZ and multinational companies. I was always passionate about science and took great pride in my work but technology has always been my first love. It took a few years of soul searching but once I started learning how to code I knew it was what I wanted to do.</p>
          </Row>

          <Row className="background">
            <h1>What do I like about code?</h1>
             <p>I like the satisfaction that you get from creating something. There are so many new technologies emerging and I would love to be a part of something bigger which will shape people's lives. Although I like the server side stuff, I belive my real strength is in Design and Front end. I'm intersted in learning technologies such as AI, Augmented Reality, Data science and machine learning etc to broaden my horizons.</p>
          </Row>

          <Row className="background">
            <h1>Why code?</h1>
            <p>I've tried my hands at learning and acquiring other skills such as learning a new language (tried Spanish but lost interest) or learn how to play the guitar (felt very cliche) but nothing stuck. However, with coding my interest grew and grew and I was lucky to find an Institue like Enspiral Dev Academy. I'm far from an expert but definietly am improving everyday.</p>
          </Row>
        </Grid>
      </div>
    )
  }
}
