import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import soleymakina from '../images/SOLEY-new.jpg'
import { getAllSoleyProducts } from '../../../../api/soleyRequests'
import { useEffect, useState } from 'react'

const SoleyMakina = () => {
  const [soleyProducts,setSoleyProducts]=useState()
  useEffect(()=>{
    getAllSoleyProducts().then(res=>{
      setSoleyProducts(res);
    })
  },[setSoleyProducts])

  return (
    <section>
      <ProductNav/>

      
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={soleymakina} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {soleyProducts && soleyProducts.map((soleyProduct)=>{
            return  <Grid key={soleyProduct._id} item lg={3}>
          <a href={soleyProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={soleyProduct.imageURL} alt="" />
            <p className='prod-name'><b>{soleyProduct.name} </b></p>
          </div>
          </a>
         </Grid>
         })}

        </Grid>
      </div>

    </section>
  )
}

export default SoleyMakina
