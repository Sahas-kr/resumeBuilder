import React from 'react'
import resumeSvg from '../images/resume.svg'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='container' id='landing'>
        <div className='row'>
            <div className='col-md-6'>
                <p className='heading'>
                    A <span>Resume</span> that builds your future.
                    Create your own resume. <span>It's free!</span>
                </p>
                <Link to='/Create-Resume'>
                    <button className='btn btn-success mt-4'>Click Here </button>
                </Link>
            </div>
            <div className='col-md-6'>
                <img src={resumeSvg} alt='Resume'/>
            </div>
        </div>
    </div>
  )
}

export default Landing