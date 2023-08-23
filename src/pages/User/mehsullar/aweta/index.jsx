import ProductNav from '../productNav/productNav'
import './index.scss'
import aweta from '../images/awetalogobg.png'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllAwetaProducts } from '../../../../api/awetaRequests'

const AWETA = () => {

  const [awetaProducts,setAwetaProducts]=useState()
  useEffect(()=>{
    getAllAwetaProducts().then(res=>{
      setAwetaProducts(res);
    })
  },[setAwetaProducts])

  return (
    <section>
      <ProductNav/>
      <img style={{marginBottom:'100px' ,marginTop:'100px'}} className='prod-logo' src={aweta} alt="" />

      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {awetaProducts && awetaProducts.map((awetaProduct)=>{
          return <Grid key={awetaProduct._id} item lg={3}>
          <a href={awetaProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={awetaProduct.imageURL} alt="" />
            <p className='prod-name'><b>{awetaProduct.name}</b></p>
          </div>
          </a>
         </Grid>
        })}
         
        </Grid>
      </div>

    </section>
  )
}

export default AWETA
