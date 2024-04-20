import React from 'react'
import Planet from '../../components/Planet'
import {data} from'./data.jsx'

function Mercury() {
  return (
    <>
    <Planet PlanetData={data} />
    </>
  )
}

export default Mercury