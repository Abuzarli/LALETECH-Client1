import { Grid } from '@mui/material'
import ProductNav from '../productNav/productNav'
import './index.scss'
import turvar from '../images/turvarmakina.png'
import { getAllTurVarProducts } from '../../../../api/turvarRequests'
import { useEffect, useState } from 'react'

const TurVarMakina = () => {
  const [turvarProducts,setTurvarProducts]=useState()
  useEffect(()=>{
    getAllTurVarProducts().then(res=>{
      setTurvarProducts(res);
    })
  },[setTurvarProducts])

  return (
    <section>
      <ProductNav/>
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={turvar} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {turvarProducts && turvarProducts.map((turvarProduct)=>{
            return  <Grid key={turvarProduct._id} item lg={3}>
          <a href={turvarProduct.link}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={turvarProduct.imageURL} alt="" />
            <p className='prod-name'><b>{turvarProduct.name} </b></p>
          </div>
          </a>
         </Grid>
         })}
         
        </Grid>
      </div>

    </section>
  )
}

export default TurVarMakina
