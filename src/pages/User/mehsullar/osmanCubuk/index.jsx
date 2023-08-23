import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import osmancubuk from '../images/osmancubuk-logo.png'
import { getAllOsmanCubukProducts } from '../../../../api/osmancubukRequests'
import { useEffect, useState } from 'react'

const OsmanCubuk = () => {

  const [osmanCubukProducts,setOsmanCubukProducts]=useState()
  useEffect(()=>{
    getAllOsmanCubukProducts().then(res=>{
      setOsmanCubukProducts(res);
    })
  },[setOsmanCubukProducts])

  return (
    <section>
      <ProductNav/>
      
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={osmancubuk} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {osmanCubukProducts && osmanCubukProducts.map((osmanCubukProduct)=>{
            return  <Grid key={osmanCubukProduct._id} item lg={3}>
          <a href={osmanCubukProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img style={{overflow:'hidden'}} className='ekin-prod' src={osmanCubukProduct.imageURL} alt="" />
            <p style={{textAlign:'center'}}>{osmanCubukProduct.title}</p>
            <p className='prod-name'><b>{osmanCubukProduct.name} </b></p>
          </div>
          </a>
         </Grid>
          })}
        </Grid>
      </div>

    </section>
  )
}

export default OsmanCubuk
