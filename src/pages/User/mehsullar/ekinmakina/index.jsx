import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
// import EkinNav from './ekinNav/ekin'
import ekinLogo from '../images/ekinmakinabg.png'

import './index.scss'
import { getAllProducts } from '../../../../api/ekinRequests'
import { useEffect, useState } from 'react'
const EKIN = () => {

  const [ekinProducts,setEkinProducts]=useState()
  useEffect(()=>{
    getAllProducts().then(res=>{
      setEkinProducts(res);
    })
  },[setEkinProducts])

  return (
    <div>
      <ProductNav/>
      {/* <EkinNav/> */}
      <img className='prod-logo' src={ekinLogo} alt="" />

            {/* ALL PRODUCTS EKIN MAKINA */}
            <div className='all-products'>
        <Grid style={{marginBottom:'100px'}} className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {ekinProducts && ekinProducts.map((ekinProduct)=>{
          return <Grid key={ekinProduct._id} item lg={3}>
          <a href={ekinProduct.link}>
          <div className='ekin-card'>
            <img className='ekin-prod' src={ekinProduct.imageURL} alt="" />
            <p className='prod-name'><b><span>{ekinProduct.weight}</span> {ekinProduct.name}</b></p>
          </div>
          </a>
         </Grid>
         })}
        </Grid>
      </div>



    </div>
  )
}

export default EKIN
