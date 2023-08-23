import { Button, Grid } from '@mui/material'
import './index.scss'
import osmancubuk from '../images/osmancubuk-logo.png'
import { deleteOsmanCubukById, getAllOsmanCubukProducts } from '../../../../api/osmancubukRequests'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import PRODNAV from '../prod-nav-admin'

const OsmanCubukADMIN = () => {

  const [osmanCubukProducts,setOsmanCubukProducts]=useState()
  useEffect(()=>{
    getAllOsmanCubukProducts().then(res=>{
      setOsmanCubukProducts(res);
    })
  },[setOsmanCubukProducts])

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
              deleteOsmanCubukById(_id)
              setOsmanCubukProducts(osmanCubukProducts.filter((x)=>x._id!=_id));
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
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={osmancubuk} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {osmanCubukProducts && osmanCubukProducts.map((osmanCubukProduct)=>{
            return  <Grid key={osmanCubukProduct._id} item lg={3}>
          <div className='ekin-card'>
            <img style={{overflow:'hidden'}} className='ekin-prod' src={osmanCubukProduct.imageURL} alt="" />
            <p style={{textAlign:'center'}}>{osmanCubukProduct.title}</p>
            <p className='prod-name'><b>{osmanCubukProduct.name} </b></p>
            <div className='prod-buttons'>
             <Button variant='contained' color='warning'>  EDIT</Button>
             <Button onClick={()=>handleDelete(osmanCubukProduct._id)} variant='contained' color='error'>DELETE</Button>
            </div>
          </div>
         </Grid>
          })}
        </Grid>
      </div>
    </section>
  )
}

export default OsmanCubukADMIN
