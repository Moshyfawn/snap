import React, { Component } from 'react'
import Head from '../components/head'
import '../index.css'

import Carusel from '../components/lib_carusel'

class Home extends Component {
  render() {
    return (
      <div>
        <Head title="Home" />
        <Carusel />
      </div>
    )
  }
}

export default Home
