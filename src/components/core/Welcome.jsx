import React from 'React'
import PropTypes from 'prop-types'

import IMAGE from './../../styles/assets/images/svb-logo.png'

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome to TMS-Frontend raja Application -({process.env.NODE_ENV})</h1>
      <img src={IMAGE} alt="SVB-logo" />
      <h3>Welcome {props.name}</h3>
    </div>
  )
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  hasSendProps: PropTypes.bool,
}

export default Welcome
