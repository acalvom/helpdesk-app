import TicketForm from "./TicketForm"

export function CreateTicket() {
  return (
    <main className="flex flex-col m-16 items-center">
      <h2 className="py-2 text-xl text-green-dark font-bold">Create new ticket</h2>
      <TicketForm />
    </main>
  )
}

export default CreateTicket
