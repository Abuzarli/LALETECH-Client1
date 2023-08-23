import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import ilerimakina from '../images/ilerimakina.png'
import { getAllIleriProducts } from '../../../../api/ileriRequests'
import { useEffect, useState } from 'react'

const IleriMakina = () => {
  const [ileriProducts,setIleriProducts]=useState()
  useEffect(()=>{
    getAllIleriProducts().then(res=>{
      setIleriProducts(res);
    })
  },[setIleriProducts])

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={ilerimakina} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {ileriProducts &&ileriProducts.map((ileriProduct)=>{
            return  <Grid key={ileriProduct._id}  item lg={3}>
          <a href={ileriProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={ileriProduct.imageURL} alt="" />
            <p className='prod-name'><b>{ileriProduct.model} </b></p>
            <p  style={{textAlign:'center', fontSize:'18px'}}>{ileriProduct.name}</p>
          </div>
          </a>
         </Grid>
         })}
         
        </Grid>
      </div>

    </section>
  )
}

export default IleriMakina
