import { Button, Grid } from '@mui/material'
import './index.scss'
import { getAllProducts } from '../../../api/ekinRequests'
import { getAllAtlasProducts } from '../../../api/atlasicsRequests'

import { useEffect, useState } from 'react'
import ekinLogo from '../../User/mehsullar/images/ekinmakinabg.png'
import atlas from './images/ATLASbg.png'

import PRODNAV from './prod-nav-admin'
const PRODUCTS = () => {



  return (
    <section>
      <PRODNAV/>


    </section>
  )
}

export default PRODUCTS

