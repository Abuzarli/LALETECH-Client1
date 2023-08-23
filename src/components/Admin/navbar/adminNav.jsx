import { Link, NavLink } from 'react-router-dom'
import './adminNav.scss'
import { useState } from 'react'
import navLogo from './images/laletechbg.png'
import {
  FaBars,
  FaIdBadge,
  FaShoppingBag,FaTh,
}from 'react-icons/fa'

const ADMINNAVBAR = ({children}) => {
  const [isOpen,setIsOpen]=useState(false)
  const toggle = ()=> setIsOpen(!isOpen)
  const menuItem=[
    {
      path:'dashboard',
      name:'Dashboard',
      icon:<FaTh/>
    },
    {
      path:'references',
      name:'Referanslar',
      icon:<FaIdBadge/>
    },  
    {
      path:'products',
      name:'Məhsullar',
      icon:<FaShoppingBag/>
    },

  ]
  return (
    <div className='container'>
      <div style={{width:isOpen ? '250px' : '50px'}} className="sidebar">
        <div className="top-section">
          {/* <img style={{display:isOpen ? 'block' : 'none'}} className="side_logo" src="navLogo" alt="" /> */}
          <Link style={{textDecoration:'none',color:'white'}} to=''><h1 style={{display:isOpen ? 'block' : 'none'}} className="side_logo">LALETECH</h1></Link>
          <div style={{marginLeft:isOpen ? '50px' : '0px'}} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink  onClick={()=>window.scrollTo(0, 0)}  to={item.path} key={index} className='side-link' activeclassname='active'>
              <div className="side-icon">{item.icon}</div>
              <div style={{display:isOpen ? 'block' : 'none'}} className='side_link_text'>{item.name}</div>
            </NavLink>
          )) 
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default ADMINNAVBAR





      {/* <Link to='dashboard'>Dashboard</Link>
      <Link to='add-product'>Add Product</Link>
      <Link to='add-project'>Add Project</Link>
      <Link to='add-reference'>Add Reference</Link> */}