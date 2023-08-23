import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import karaduman from '../images/karadumanbg.png'
import { useEffect, useState } from 'react'
import { getAllKaradumanProducts } from '../../../../api/karadumanRequests'

const KaradumanKalip = () => {
  const [karadumanProducts,setKaradumanProducts]=useState()
  useEffect(()=>{
    getAllKaradumanProducts().then(res=>{
      setKaradumanProducts(res);
    })
  },[setKaradumanProducts])

  return (
    <section>
      <ProductNav/>

      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={karaduman} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {karadumanProducts && karadumanProducts.map((karadumanProduct)=>{
            return  <Grid key={karadumanProduct._id} item lg={3}>
          <a href={karadumanProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={karadumanProduct.imageURL} alt="" />
            <p className='prod-name'><b>{karadumanProduct.name}</b></p>
          </div>
          </a>
         </Grid>
         })}
        </Grid>
      </div>

    </section>
  )
}

export default KaradumanKalip
