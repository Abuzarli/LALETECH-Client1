import { Button, Grid } from '@mui/material'
import './index.scss'
import ilerimakina from '../images/ilerimakina.png'
import { deleteIleriById, getAllIleriProducts } from '../../../../api/ileriRequests'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import PRODNAV from '../prod-nav-admin'

const IleriMakinaADMIN = () => {
  const [ileriProducts,setIleriProducts]=useState()
  useEffect(()=>{
    getAllIleriProducts().then(res=>{
      setIleriProducts(res);
    })
  },[setIleriProducts])

        // DELETE
        function handleDelete(id){
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
              deleteIleriById(id)
              setIleriProducts(ileriProducts.filter((x)=>x.id!=id));
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
      <img style={{marginBottom:'100px' ,marginTop:'100px' ,width:'28rem'}} className='prod-logo' src={ilerimakina} alt="" />
      
      <div className='all-products' style={{marginBottom:'100px'}}>
        <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {ileriProducts &&ileriProducts.map((ileriProduct)=>{
            return  <Grid  item lg={3}>
          <div className='ekin-card'>
            <img className='ekin-prod' src={ileriProduct.imageURL} alt="" />
            <p className='prod-name'><b>{ileriProduct.model} </b></p>
            <p  style={{textAlign:'center', fontSize:'18px'}}>{ileriProduct.name}</p>
            <div className='prod-buttons'>
             <Button variant='contained' color='warning'>  EDIT</Button>
             <Button onClick={()=>handleDelete(ileriProduct._id)} variant='contained' color='error'>DELETE</Button>
            </div>
          </div>
         </Grid>
         })}
         
        </Grid>
      </div>

    </section>
  )
}

export default IleriMakinaADMIN
