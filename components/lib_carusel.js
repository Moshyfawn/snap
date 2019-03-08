import React, { Component } from 'react'
import ScrollSnap from 'scroll-snap'

const snapConfig = {
  scrollSnapDestination: "0% 100%",
  scrollTimeout: 1,
  scrollTime: 500
};

class Carusel extends Component {
  container = React.createRef();

  bindScrollSnap() {
    function callback() {
      // optional callback
    }

    const element = this.container.current;
    const snapObject = new ScrollSnap(element, snapConfig);
    snapObject.bind(callback);
  }

  componentDidMount() {
  	if(!CSS.supports('scroll-snap-align: start')){
  		//If scroll snap isn't supported with CSS use JS
  		this.bindScrollSnap();
  	}
  }

  render() {
    return (
      <section className='container' ref={this.container}>
        <h1 className='child' >Slide 1</h1>
        <h1 className='child' >Slide 2</h1>
        <h1 className='child' >Slide 3</h1>
        <h1 className='child' >Slide 4</h1>
        <h1 className='child' >Slide 5</h1>
        <style jsx>{`
          .container {
            width: 100%;
            height: 100vh;
            text-align: center;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            scroll-padding: 10px;
          }
          .child {
            height: 100%;
            margin: 0;
            scroll-snap-align: center;
          }
          .child :nth-child(odd) {
            background-color: red;
          }
          .child :nth-child(even) {
            background-color: green;
          }
      `}</style>
      </section>
    )
  }
}

export default Carusel
