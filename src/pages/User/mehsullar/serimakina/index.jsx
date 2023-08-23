import ProductNav from '../productNav/productNav'
import './index.scss'
import serimakina from '../images/serimakinabg.png'
import { Grid } from '@mui/material'
import { getAllSeriProducts } from '../../../../api/seriRequests'
import { useEffect, useState } from 'react'

const SeriMakina = () => {
  const [seriProducts,setSeriProducts]=useState()
  useEffect(()=>{
    getAllSeriProducts().then(res=>{
      setSeriProducts(res);
    })
  },[setSeriProducts])

  return (
    <section>
      <ProductNav/>
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={serimakina} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {seriProducts && seriProducts.map((seriProduct)=>{
            return <Grid key={seriProduct._id} item lg={3}>
          <a href={seriProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={seriProduct.imageURL} alt="" />
            <p className='prod-name'><b>{seriProduct.name}</b></p>
          </div>
          </a>
         </Grid>
         })}
         
        </Grid>
      </div>

    </section>
  )
}

export default SeriMakina
