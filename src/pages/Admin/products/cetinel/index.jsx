import { Button, Grid } from '@mui/material'
import './index.scss'
import cetinel from '../images/cetinel.png'
import { deleteCetinelById, getAllCetinelProducts } from '../../../../api/cetinelRequests'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import PRODNAV from '../prod-nav-admin'

const CETINELADMIN = () => {

  const [cetinelProducts,setCetinelProducts]=useState()
  useEffect(()=>{
    getAllCetinelProducts().then(res=>{
      setCetinelProducts(res);
    })
  },[setCetinelProducts])

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
              deleteCetinelById(_id)
              setCetinelProducts(cetinelProducts.filter((x)=>x._id!=_id));
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
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'30%'}} className='prod-logo' src={cetinel} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cetinelProducts && cetinelProducts.map((cetinelProduct)=>{
            return  <Grid key={cetinelProduct._id} item lg={3}>
          <div className='ekin-card'>
            {/* <div className='ekin-child'>
              <p> <span> 30 </span>ORION</p>
              <p>yatay injeksion makinalari</p>
            </div> */}
            <img className='ekin-prod' src={cetinelProduct.imageURL} alt="" />
            <p className='prod-name'><b>{cetinelProduct.name} </b></p>
            <div className='prod-buttons'>
             <Button variant='contained' color='warning'>  EDIT</Button>
             <Button onClick={()=>handleDelete(cetinelProduct._id)} variant='contained' color='error'>DELETE</Button>
            </div>
          </div>
         </Grid>
         })}
        </Grid>
      </div>

    </section>
  )
}

export default CETINELADMIN
