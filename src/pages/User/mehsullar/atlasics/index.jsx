import ProductNav from '../productNav/productNav'
import './index.scss'
import atlas from '../images/laletechsogutma.png'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllAtlasProducts } from '../../../../api/atlasicsRequests'

const ATLASICS = () => {
  const [atlasProducts,setAtlasProducts]=useState()
  useEffect(()=>{
    getAllAtlasProducts().then(res=>{
      setAtlasProducts(res);
    })
  },[setAtlasProducts])


  return (
    <section>
            <ProductNav/>
            <img style={{marginBottom:'100px', marginTop:'100px' ,width:'18rem'}} className='prod-logo' src={atlas} alt="" />

            <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {atlasProducts && atlasProducts.map((atlasProduct)=>{
          return <Grid key={atlasProduct._id} item lg={3}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={atlasProduct.imageURL} alt="" />
            <p className='prod-name'><b>{atlasProduct.name} </b></p>
          </div>
         </Grid>
        })}
         
        </Grid>
      </div>

    </section>
  )
}

export default ATLASICS
