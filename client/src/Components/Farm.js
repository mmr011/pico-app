import React from 'react'

const Farm = props => {
  return (
    <div>
      <p key={props.farm.key}>{props.farm.message}</p>
    </div>
  )
}

export default Farm;
