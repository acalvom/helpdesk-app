import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full mx-4 my-8">
      <h1 className="px-2 py-1 text-lg text-primary-extra-dark font-bold ">HELP DESK</h1>
      <ul className="flex flex-row mx-auto gap-4">
        <li className="px-2 py-1 text-lg text-primary-dark font-semibold rounded-md hover:bg-primary-hover hover:text-primary-extra-light">
          <Link href="/"> Dashboard </Link>
        </li>
        <li className="px-2 py-1 text-lg text-primary-dark font-semibold rounded-md hover:bg-primary-hover  hover:text-primary-extra-light">
          <Link href="/tickets"> Tickets </Link>
        </li>
      </ul>
    </nav>
  )
}
