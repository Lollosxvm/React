import './Navbar.css'
import Link from './Link'

function Navabar() {
  return (
    <>
      <div className="bg-red-500 text-white p-4">
        Questo è un div di prova rosso
      </div>
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
          <Link>CiaoCiaone</Link>
        </li>
      </ul>
    </>
  )
}

export default Navabar
