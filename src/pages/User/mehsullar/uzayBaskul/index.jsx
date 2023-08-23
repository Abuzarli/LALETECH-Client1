import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import uzaybaskul from '../images/uzay_baskul.png'
import { getAllUzayProducts } from '../../../../api/uzaybaskulRequests'
import { useEffect, useState } from 'react'

const UzayBaskul = () => {

  const [uzayProducts,setUzayProducts]=useState()
  useEffect(()=>{
    getAllUzayProducts().then(res=>{
      setUzayProducts(res);
    })
  },[setUzayProducts])

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={uzaybaskul} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {uzayProducts && uzayProducts.map((uzayProduct)=>{
            return  <Grid key={uzayProduct._id} item lg={3}>
          <a href={uzayProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={uzayProduct.imageURL} alt="" />
            <p className='prod-name'><b>{uzayProduct.name}</b></p>
          </div>
          </a>
         </Grid>
         })}
        </Grid>
      </div>

    </section>
  )
}

export default UzayBaskul
