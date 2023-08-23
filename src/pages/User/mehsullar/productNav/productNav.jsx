import { NavLink } from 'react-router-dom'
import './nav.scss'

const ProductNav = () => {
  return (
    <section>
          <h1 className='product-title'>BÜTÜN MƏHSULLAR</h1>
         <div className='product-nav'>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/ekin-makina'>EKIN MAKINA</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/atlasics'>LALETECH</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/aweta'>AWETA</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/seri-makina'>SERI MAKINA</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/ceylift'>CEYLİFT</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/ileri-makina'>ILERI MAKINA</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/soley-makina'>SOLEY MAKINA</NavLink>
      
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/osman-cubuk'>OSMAN ÇUBUK</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/tur-var-makina'>TÜR-VAR MAKİNA</NavLink>

            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/karaduman-kalip'>KARADUMAN KALIP</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/haknersan'>HAKNERSAN</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/cetinel'>ÇETİNEL</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/uzay-baskul'>UZAY BASKÜL</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/filo-kompressor'>FİLO KOMPRESÖR</NavLink>
            <NavLink style={{textDecoration:'none'}} onClick={()=>window.scrollTo(0, 0)} className='prod-nav' activeclassname='active' to='/products/elave-mehsullar'>ƏLAVƏ MƏHSULLAR</NavLink>

       </div>

     </section>
  )
}

export default ProductNav
