import React from 'react'
import ADMINNAVBAR from '../../components/Admin/navbar/adminNav'
import { Outlet } from 'react-router-dom'

const AdminRoot = () => {
  return (
    <>

      <ADMINNAVBAR>
      <Outlet/>
      </ADMINNAVBAR>
    </>
  )
}

export default AdminRoot
