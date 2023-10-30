import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col m-16 items-center">
      <h1 className="py-2 text-4xl text-green-dark font-black">Ups!</h1>
      <h2 className="py-2 text-3xl text-green-main font-extrabold">
        This page was not found in the app
      </h2>
      <Link href="/">
        <button className="px-4 py-2 my-8 rounded-lg bg-yellow-main text-green-dark font-semibold hover:bg-green-dark hover:text-yellow-main">
          Send me home 🏠
        </button>
      </Link>
    </main>
  )
}
