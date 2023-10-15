import Image from 'next/image'
import Link from 'next/link'
import Helpdesk from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="flex max-w-screen border-b-2 border-green-dark m-4">
        <Image src={Helpdesk} alt='helpdesk' height={70} className="hidden sm:block"/>
        <ul className="flex sm:flex-row flex-wrap gap-4 content-center">
          <li className="p-2 text-lg text-green-dark font-semibold rounded-md hover:bg-green-main hover:text-primary-extra-light">
            <Link href="/"> Dashboard </Link>
          </li>
          <li className="p-2 text-lg text-green-dark font-semibold rounded-md hover:bg-green-main  hover:text-primary-extra-light">
            <Link href="/tickets"> Tickets </Link>
          </li>
        </ul>
    </nav>
  )
}
