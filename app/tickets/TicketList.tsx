import { Ticket } from '../models/Ticket'

const getTickets = async () => {
  const res = await fetch('http://localhost:4000/tickets', {
    next: { revalidate: 0 },
  })
  return res.json()
}

const colorMap: any = {
  low: 'bg-success-main',
  medium: 'bg-warning-main',
  high: 'bg-error-main',
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket: Ticket) => (
        <div
          key={ticket.id}
          className=" mb-4 bg-primary-extra-light rounded-xl border-2 border-green-main drop-shadow-lg"
        >
          <h3 className="p-4 text-md text-green-main font-semibold">{ticket.title}</h3>
          <p className="p-4 text-md text-green-dark">{ticket.body.slice(0, 400)}...</p>
          <div className="flex flex-row-reverse">
            <span
              className={`px-4 py-2 text-xs text-green-dark font-semibold uppercase rounded-tl-lg rounded-br-lg ${
                colorMap[ticket.priority]
              }`}
            >
              {ticket.priority} priority
            </span>
          </div>
        </div>
      ))}
    </>
  )
}
