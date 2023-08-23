import { Link } from 'react-router-dom'
import './products.scss'
const PRODUCTS = () => {
  return (
    <div>
      <h3 className='droptitle'>MƏHSULLARIMIZ</h3>
    <ul className='droplist'>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/ekin-makina'>EKIN MAKİNA | İnjeksion Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/seri-makina'>SERI MAKINA | Karton Qutu Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/tur-var-makina'>TÜRVAR MAKİNA | Karton Köşəbənt Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/ileri-makina'>İLERİ MAKİNA | Karton Qatlama Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/soley-makina'>SOLEY MAKINA | Kağız Klok Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/aweta'>AWETA | Çeşidləmə Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/prducts/ceylift'> CEYLIFT | Avtokar və ElektroKar</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/karaduman-kalip'>KARADUMAN KALIP | Plastik yeşik qəlibləri</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/elave-mehsullar'>NOBEL | Karton Kleyi </Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/elave-mehsullar'>Rezin İp</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/elave-mehsullar'>Meyvə Violu</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='dropLink' to='/products/haknersan'>Muasir Bağların Qurulması</Link>
      </li>
    </ul>
  </div>
  )
}

export default PRODUCTS
