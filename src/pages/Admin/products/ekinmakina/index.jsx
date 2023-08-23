import { Button, Grid } from '@mui/material'
import ekinLogo from '../images/ekinmakinabg.png'
import './index.scss'
import { deleteEkinById, getAllProducts } from '../../../../api/ekinRequests'
import { useEffect, useState } from 'react'
import PRODNAV from '../prod-nav-admin'
import Swal from 'sweetalert2'
const EKINADMIN = () => {

  const [ekinProducts,setEkinProducts]=useState()
  useEffect(()=>{
    getAllProducts().then(res=>{
      setEkinProducts(res);
    })
  },[setEkinProducts])

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
      deleteEkinById(_id)
      setEkinProducts(ekinProducts.filter((x)=>x._id!=_id));
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
    <div>
      <PRODNAV/>
      {/* <EkinNav/> */}
      <img className='prod-logo' src={ekinLogo} alt="" />

            {/* ALL PRODUCTS EKIN MAKINA */}
            <div className='all-products'>
        <Grid style={{marginBottom:'100px'}} className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {ekinProducts && ekinProducts.map((ekinProduct)=>{
          return <Grid key={ekinProduct._id} item lg={3}>
          <div className='ekin-card'>
            <img className='ekin-prod' src={ekinProduct.imageURL} alt="" />
            <p className='prod-name'><b><span>{ekinProduct.weight}</span> {ekinProduct.name}</b></p>
            <div className='prod-buttons'>
             <Button variant='contained' color='warning'>  EDIT</Button>
             <Button variant='contained' color='error'onClick={()=>handleDelete(ekinProduct._id)}>DELETE</Button>
            </div>
          </div>
         </Grid>
         })}
        </Grid>
      </div>

    </div>
  )
}

export default EKINADMIN
