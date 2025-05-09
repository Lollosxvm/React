import './Navbar.css'
import Link from './Link'

function Navabar() {
  const img = 'vite'
  return (
    <>
      <img style={{ height: '300px' }} src={`./${img}.svg`} alt="img" />
      <ul>
        <li>
          <Link>qwerty</Link>
        </li>
        <li>
          <Link>contatti</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>sop</Link>
        </li>
        <li>
          <Link>CiaoCiao</Link>
        </li>
      </ul>
    </>
  )
}

export default Navabar
