import TicketList from './TicketList'

export default function Tickets() {
  return (
    <main className="flex flex-col m-16">
      <h2 className="py-2 text-lg text-yellow-main font-bold">Tickets</h2>
      <TicketList />
    </main>
  )
}
