import React, { Component } from 'react'

class Carusel extends Component {
  render() {
    return (
      <section className='container'>
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
            scroll-snap-type: mandatory;
            overflow-y: scroll;
          }
          .child {
            height: 100%;
            scroll-snap-align: inherit;
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