import Link from 'next/link'
import { Ticket } from '../models/Ticket'
import { API_URL, colorMap } from '../utils/constants'
import { delay } from '../utils/delay'

const getTickets = async () => {
  await delay(2000)

  const res = await fetch(`${API_URL}/tickets`, {
    next: { revalidate: 0 },
  })
  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map(({ id, body, priority, title }: Ticket) => (
        <div
          key={id}
          className=" mb-4 bg-primary-extra-light rounded-xl border-2 border-green-main drop-shadow-lg"
        >
          <Link href={`/tickets/${id}`}>
            <h3 className="p-4 text-md text-green-main font-semibold">{title}</h3>
            <p className="p-4 text-md text-green-dark">{body.slice(0, 400)}...</p>
            <div className="flex flex-row-reverse">
              <span
                className={`px-4 py-2 text-xs text-green-dark font-semibold uppercase rounded-tl-lg rounded-br-lg ${colorMap[priority]}`}
              >
                {priority} priority
              </span>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
