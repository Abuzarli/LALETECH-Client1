import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import cetinel from '../images/cetinel.png'
import { getAllCetinelProducts } from '../../../../api/cetinelRequests'
import { useEffect, useState } from 'react'

const CETINEL = () => {

  const [cetinelProducts,setCetinelProducts]=useState()
  useEffect(()=>{
    getAllCetinelProducts().then(res=>{
      setCetinelProducts(res);
    })
  },[setCetinelProducts])

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'30%'}} className='prod-logo' src={cetinel} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cetinelProducts && cetinelProducts.map((cetinelProduct)=>{
            return  <Grid key={cetinelProduct._id} item lg={3}>
          <a href={cetinelProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={cetinelProduct.imageURL} alt="" />
            <p className='prod-name'><b>{cetinelProduct.name} </b></p>
          </div>
          </a>
         </Grid>
         })}
        </Grid>
      </div>


    </section>
  )
}

export default CETINEL
