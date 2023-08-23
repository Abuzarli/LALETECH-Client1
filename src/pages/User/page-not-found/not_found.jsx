import { Link } from 'react-router-dom'
import './index.scss'
import { Button } from '@mui/material'
import { Helmet } from 'react-helmet'

const PAGENOTFOUND = () => {
  return (
    <div className='not-found'>
        <Helmet>
       <meta charset="utf-8" />
       <title>Error 404</title>
      </Helmet>


      <div className='not-found-content'>
        <h1 className='not-found-number'>404</h1>
      <h1 className='not-found-title'>PAGE NOT FOUND</h1>
      <p className='not-found-text'>Please try one of the following pages:</p>
      <Link to='/'><button className='not-found-button'>ANA SƏHİFƏ</button></Link>
      </div>
    </div>
  )
}

export default PAGENOTFOUND
