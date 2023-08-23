import { Button, Grid } from '@mui/material'
import './index.scss'
import soleymakina from '../images/SOLEY-new.jpg'
import { deleteSoleyById, getAllSoleyProducts } from '../../../../api/soleyRequests'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import PRODNAV from '../prod-nav-admin'

const SoleyMakinaADMIN = () => {
  const [soleyProducts,setSoleyProducts]=useState()
  useEffect(()=>{
    getAllSoleyProducts().then(res=>{
      setSoleyProducts(res);
    })
  },[setSoleyProducts])

        // DELETE
        function handleDelete(_id){
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              deleteSoleyById(_id)
              setSoleyProducts(soleyProducts.filter((x)=>x._id!=_id));
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        }

  return (
    <section>
      <PRODNAV/>
      
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={soleymakina} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {soleyProducts && soleyProducts.map((soleyProduct)=>{
            return  <Grid key={soleyProduct._id} item lg={3}>
          <div className='ekin-card'>
            <img className='ekin-prod' src={soleyProduct.imageURL} alt="" />
            <p className='prod-name'><b>{soleyProduct.name} </b></p>
            <div className='prod-buttons'>
             <Button variant='contained' color='warning'>  EDIT</Button>
             <Button onClick={()=>handleDelete(soleyProduct._id)} variant='contained' color='error'>DELETE</Button>
            </div>
          </div>
         </Grid>
         })}

        </Grid>
      </div>
    </section>
  )
}

export default SoleyMakinaADMIN
