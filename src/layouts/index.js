import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Buttons from '../components/Buttons'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="adrift on a cosmic ocean"
      meta={[
        { name: 'description', content: 'Personal blog of Oliver Hookins and Angela Collins' },
        { name: 'keywords', content: 'technology, leadership, management, yoga, fitness, life' },
      ]}
    />
    <Header />
    <Buttons />
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div className="fl w-70 bg-dark-gray pa3 pl5 pr5">
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
