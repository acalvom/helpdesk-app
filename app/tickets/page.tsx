import { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

export default function Tickets() {
  return (
    <main className="flex flex-col m-16">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="py-2 text-lg text-yellow-main font-bold">Tickets</h2>
          <p className="mb-4 text-green-dark">
            Active tickets are displayed below. Click on a ticket to see more details.
          </p>
        </div>
        <Link href="/tickets/create">
          <button className="px-4 py-2 rounded-lg bg-yellow-main text-green-dark font-semibold hover:bg-green-dark hover:text-yellow-main">
            Add new ticket
          </button>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
