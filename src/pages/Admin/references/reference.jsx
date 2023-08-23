import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { deleteReferenceById, getAllReferences } from '../../../api/referenceRequest';
import './index.scss'
import { Button } from '@mui/material';
import Swal from 'sweetalert2'

const REFERENCES = () => {
  const [references,setReferences]=useState()
  useEffect(()=>{
    getAllReferences().then(res=>{
      setReferences(res);
    })
  },[setReferences])

  // DELETE FUNCTION
  function handleDelete(_id){

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReferenceById(_id)
        setReferences(references.filter((x)=>x._id!==_id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
    
  }

 
  const data = references && references.map((reference) => {
    return {
      key: reference._id,
      title: reference.name,
      id: reference._id,
      link: reference.link,
      image: <img className='references-logo' src={reference.imageURL} alt="" />,
      content: reference.content,
    };
  });
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (reference) => {
      return <Button variant='contained' color='error' onClick={()=>handleDelete(reference.id)}>Delete</Button>},
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button  variant='contained' color='warning'>Edit</Button>,
    },
  ];


  return (
    <>

<div className='ref-button'>
<Button className='ref-button' variant="contained">ADD REFERENCE</Button>

</div>

    <div className='ref-table'>
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.content}
        </p>
      ),
    }}
    dataSource={data}
  />    </div>
  </>
  )
}

export default REFERENCES
