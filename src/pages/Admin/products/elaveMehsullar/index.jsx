import { useEffect, useState } from 'react'
import { deleteOtherById, getAllOtherProducts } from '../../../../api/otherRequests'
import Swal from 'sweetalert2'
import { Button, Grid } from '@mui/material'
import './index.scss'
import PRODNAV from '../prod-nav-admin'

const ElaveMehsullarADMIN = () => {

  const [otherProducts,setOtherProducts]=useState()
  useEffect(()=>{
    getAllOtherProducts().then(res=>{
      setOtherProducts(res);
    })
  },[setOtherProducts])

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
              deleteOtherById(_id)
              setOtherProducts(otherProducts.filter((x)=>x._id!=_id));
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
      <div className='other-title'><h1>XAMMAL VƏ ƏLAVƏ MƏHSULLAR</h1></div>

      <Grid style={{marginTop:'100px',marginBottom:'100px'}} className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {otherProducts && otherProducts.map((otherProduct)=>{
          return   <Grid key={otherProduct._id} item lg={3}>
          <div className='ekin-card'>
            <img className='ekin-prod' src={otherProduct.imageURL} alt={otherProduct.name} />
            <p className='prod-name'><b>{otherProduct.name} </b></p>
            <div className='prod-buttons'>
             <Button variant='contained' color='warning'>  EDIT</Button>
             <Button onClick={()=>handleDelete(otherProduct._id)} variant='contained' color='error'>DELETE</Button>
            </div>
          </div>
         </Grid>
         })}
        </Grid>
    </section>
  )
}

export default ElaveMehsullarADMIN
