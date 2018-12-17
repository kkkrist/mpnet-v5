import PropTypes from 'prop-types'
import React from 'react'

const Headline = ({ children }) => (
  <div
    className='relative bg-white my4'
    style={{
      paddingBottom: '0.25rem',
      zIndex: -1
    }}
  >
    <hr
      className='absolute bg-silver xs-hide'
      style={{
        border: 'none',
        height: '3px',
        width: '100%',
        zIndex: -2
      }}
    />
    <h2
      className='h1 italic inline-block m0 sm-px3 sm-ml3 bg-white'
      style={{ marginTop: '0.25rem' }}
    >
      {children}
    </h2>
  </div>
)

Headline.propTypes = {
  children: PropTypes.string.isRequired
}

export default Headline
