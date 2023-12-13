import React from 'react'

const Section = ({ title, desc }) => {
  return (
    <div>
          <hr />
          <h1>{title}</h1>
          <p>{desc }</p>
    </div>
  )
}

export default Section
