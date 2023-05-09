import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Marketing Coordinator</title>
        <meta property="og:title" content="Chief Marketing Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
