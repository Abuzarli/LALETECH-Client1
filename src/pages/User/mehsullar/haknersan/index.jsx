import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import haknersan from '../images/haknersan.png'
import { getAllHaknersanProducts } from '../../../../api/haknersanRequests'
import { useEffect, useState } from 'react'

const HAKNERSAN = () => {

  const [haknersanProducts,setHaknersanProducts]=useState()
  useEffect(()=>{
    getAllHaknersanProducts().then(res=>{
      setHaknersanProducts(res);
    })
  },[setHaknersanProducts])

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={haknersan} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {haknersanProducts && haknersanProducts.map((haknersanProduct)=>{
            return  <Grid key={haknersanProduct._id} item lg={3}>
          <a href={haknersanProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={haknersanProduct.imageURL} alt="" />
            <p className='prod-name'><b>{haknersanProduct.name}</b></p>
          </div>
          </a>
         </Grid>
         })}
        </Grid>
      </div>

    </section>
  )
}

export default HAKNERSAN
