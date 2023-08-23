import { NavLink } from 'react-router-dom'

const PRODNAV = () => {
  return (
    <div>
            <div className='product-nav'>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/ekin-makina'>EKIN MAKINA</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/atlasics'>LALETECH</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/aweta'>AWETA</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/seri-makina'>SERI MAKINA</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/ceylift'>CEYLİFT</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/ileri-makina'>ILERI MAKINA</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/soley-makina'>SOLEY MAKINA</NavLink>
      
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/osman-cubuk'>OSMAN ÇUBUK</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/tur-var-makina'>TÜR-VAR MAKİNA</NavLink>

            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/karaduman-kalip'>KARADUMAN KALIP</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/haknersan'>HAKNERSAN</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/cetinel'>ÇETİNEL</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/uzay-baskul'>UZAY BASKÜL</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/filo-kompressor'>FİLO KOMPRESÖR</NavLink>
            <NavLink className='prod-nav' activeclassname='active' to='/diego/products/elave-mehsullar'>ƏLAVƏ MƏHSULLAR</NavLink>

       </div>
    </div>
  )
}

export default PRODNAV
