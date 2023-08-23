import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import kompressor from '../images/kompressor.png'
import { getAllFiloProducts } from '../../../../api/filoRequests'
import { useEffect, useState } from 'react'

const FiloKompresor = () => {

  const [filoProducts,setFiloProducts]=useState()
  useEffect(()=>{
    getAllFiloProducts().then(res=>{
      setFiloProducts(res);
    })
  },[setFiloProducts])
  
  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={kompressor} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {filoProducts && filoProducts.map((filoProduct)=>{
            return   <Grid key={filoProduct._id} item lg={3}>
          <a href={filoProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={filoProduct.imageURL} alt="" />
            <p className='prod-name'><b>{filoProduct.name} </b></p>
          </div>
          </a>
         </Grid>
                   })}

        </Grid>
      </div>

    </section>
  )
}

export default FiloKompresor
