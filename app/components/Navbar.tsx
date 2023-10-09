import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>HELP DESK</h1>
      <ul>
        <li>
          <Link href="/"> Dashboard </Link>
        </li>
        <li>
          <Link href="/tickets"> Tickets </Link>
        </li>
      </ul>
    </nav>
  )
}
