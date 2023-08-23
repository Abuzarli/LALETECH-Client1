import { Link } from 'react-router-dom'

const DropDownProduct = () => {
  return (
    <div className='flex flex-col dropDownProduct '>
      <ul className='flex flex-col gap-4 '>
        <li>
            <Link className='dropLink' to='injeksion-makina'>İnjeksion Makina</Link>
        </li>
        <li>
            <Link className='dropLink' to='karton-qutu-makina'>Karton Qutu Makina</Link>
        </li>
        <li>
            <Link className='dropLink' to='karton-kosebent-makina'>Karton Köşəbənt Makina</Link>
        </li>
        <li>
            <Link className='dropLink' to='karton-qatlama-makina'>Karton Qatlama Makina</Link>
        </li>
        <li>
            <Link className='dropLink' to='kagiz-klok-makina'>Kağız Klok Makina</Link>
        </li>
        <li>
            <Link className='dropLink' to='cesitleme-makina'>Çeşidləmə Makina</Link>
        </li>
        <li>
            <Link className='dropLink' to='avtokar-elektrokar'>Avtokar ElektroKar</Link>
        </li>
        <li>
            <Link className='dropLink' to='yapisqan'>Karton Yapışqanı</Link>
        </li>
        <li>
          <Link className='dropLink' to='rezin-ip'>Rezin İp</Link>
        </li>
        <li>
          <Link className='dropLink' to='viol'>Meyvə Violu</Link>
        </li>
        <li>
          <Link className='dropLink' to='karaduman-kalip'>Karaduman Kalip</Link>
        </li>
      </ul>
    </div>
  )
}

export default DropDownProduct
