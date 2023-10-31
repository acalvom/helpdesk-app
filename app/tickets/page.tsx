import { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

export default function Tickets() {
  return (
    <main className="flex flex-col m-16">
      <h2 className="py-2 text-lg text-yellow-main font-bold">Tickets</h2>
      <p className="mb-4 text-green-dark">
        Active tickets are displayed below. Click on a ticket to see more details.
      </p>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
