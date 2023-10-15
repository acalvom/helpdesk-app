import { Ticket } from '@/app/models/Ticket'
import { API_URL, colorMap } from '@/app/utils/constants'
import Link from 'next/link'

const getTicketById = async (id: number) => {
  const res = await fetch(`${API_URL}/tickets/${id}`, {
    next: { revalidate: 60 },
  })
  return res.json()
}

export default async function TicketDetails({ params }: { params: { id: number } }) {
  const id: number = params.id
  const { id: ticketId, body, priority, title, user_email }: Ticket = await getTicketById(id)

  return (
    <main className="flex flex-col m-16">
      <div
        key={ticketId}
        className=" mb-4 bg-primary-extra-light rounded-xl border-2 border-green-main drop-shadow-lg"
      >
        <h3 className="p-4 text-md text-green-main font-semibold">{title}</h3>
        <p className="px-4 text-sm text-green-dark font-semibold">Created by {user_email}</p>
        <p className="p-4 text-md text-green-dark">{body}</p>
        <div className="flex flex-row-reverse">
          <span
            className={`px-4 py-2 text-xs text-green-dark font-semibold uppercase rounded-tl-lg rounded-br-lg ${colorMap[priority]}`}
          >
            {priority} priority
          </span>
        </div>
      </div>
      <Link href="/tickets">
        <button className="px-4 py-2 rounded-lg bg-yellow-main text-green-dark font-semibold hover:bg-green-dark hover:text-yellow-main">
          Back
        </button>
      </Link>
    </main>
  )
}
