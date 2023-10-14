import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex max-w-screen border-b-2 border-green-dark m-4">
        <h1 className="hidden p-3 text-xl text-green-dark font-bold sm:block">HELP DESK</h1>
        <ul className="flex sm:flex-row flex-wrap mx-auto gap-4 content-center">
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
