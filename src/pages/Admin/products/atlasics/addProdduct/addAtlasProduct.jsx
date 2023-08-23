import './index.scss'
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { ProductValidation } from '../../../../../validation/atlas.validation';
import { postAtlasics } from '../../../../../api/atlasicsRequests';


const AddAtlasProduct = () => {
  function handleSubmit(values, actions) {
    console.log(values);
    postAtlasics(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    actions.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',  // Updated initial value
      link: ''
    },
    validationSchema: ProductValidation,
    onSubmit: handleSubmit
  });

  return (
    <section style={{ margin: '100px' }}>
      <form className='add-form' onSubmit={formik.handleSubmit}>
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          type='text'
          name='name'
          style={{ width: '20rem' }}
          id='filled-basic'
          label='Name'
          variant='filled'
          error = {formik.errors.name && formik.touched.name ? true : false}
        />
        {formik.errors.name && formik.touched.name && <p style={{color:'red'}}>{formik.errors.name}</p>}
        
        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          type='text'
          name='image'
          style={{ width: '20rem' }}
          id='filled-basic'
          label='Image (URL)'
          variant='filled'
          error = {formik.errors.image && formik.touched.image ? true : false}
        />
        {formik.errors.image && formik.touched.image && <p style={{color:'red'}}>{formik.errors.image}</p>}


        <TextField
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.link}
          type='text'
          name='link'
          style={{ width: '20rem' }}
          id='filled-basic'
          label='Link (URL)'
          variant='filled'
          error = {formik.errors.link && formik.touched.link ? true : false}
        />
        {formik.errors.link && formik.touched.link && <p style={{color:'red'}}>{formik.errors.link}</p>}


        <Button
          style={{ width: '15rem' }}
          variant='contained'
          color='warning'
          type='submit'
        >
          ADD
        </Button>
      </form>
    </section>
  );
};

export default AddAtlasProduct;