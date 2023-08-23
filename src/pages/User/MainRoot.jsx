import USERNAVBAR from '../../components/User/Navbar/navbar'
import FOOTER from '../../components/User/Footer'
import { Outlet } from 'react-router-dom'

const MainRoot = () => {
  return (
    <>
      <USERNAVBAR/>
      <Outlet/>
      <FOOTER/>
    </>
  )
}

export default MainRoot
