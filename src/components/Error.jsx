import React from 'react'
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
        <img src="https://img.lum.dolimg.com/v1/images/databank_jedimindtrick_01_169_a491266d.jpeg?region=0%2C43%2C1560%2C781" alt="obiwan" width={'500px'} />
        <p>These are not the droids you're looking for</p>
        <Link to={'/'}>Go Back</Link>

    </div>
  )
}

export default Error