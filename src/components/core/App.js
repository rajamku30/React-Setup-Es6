import React from 'react'
import './../../styles/global.css'
import Welcome from './Welcome'

const App = () => {

  return (
    <>
      <Welcome name={process.env.name} hasSendProps={true} />
    </>
  )
}

export default App
