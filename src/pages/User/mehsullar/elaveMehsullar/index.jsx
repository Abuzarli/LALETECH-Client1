import { useEffect, useState } from 'react'
import { getAllOtherProducts } from '../../../../api/otherRequests'
import ProductNav from '../productNav/productNav'
import { Grid } from '@mui/material'
import './index.scss'

const ElaveMehsullar = () => {

  const [otherProducts,setOtherProducts]=useState()
  useEffect(()=>{
    getAllOtherProducts().then(res=>{
      setOtherProducts(res);
    })
  },[setOtherProducts])

  return (
    <section>
      <ProductNav/>
      
      <div className='other-title'><h1>XAMMAL VƏ ƏLAVƏ MƏHSULLAR</h1></div>

      <Grid style={{marginTop:'100px',marginBottom:'100px'}} className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {otherProducts && otherProducts.map((otherProduct)=>{
          return   <Grid key={otherProduct._id} item lg={3}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={otherProduct.imageURL} alt={otherProduct.name} />
            <p className='prod-name'><b>{otherProduct.name} </b></p>
          </div>
         </Grid>
         })}
        </Grid>

    </section>
  )
}

export default ElaveMehsullar
