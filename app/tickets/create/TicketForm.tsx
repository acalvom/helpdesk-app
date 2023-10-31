'use client'

import { useState } from 'react'

export async function TicketForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('')

  return (
    <form className="flex flex-col w-2/5 py-8 px-12 bg-yellow-light rounded-xl border-2 border-green-dark drop-shadow-lg">
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Title
        <input type="text" value={title} className="py-1 rounded-sm border-0" />
      </label>
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Body
        <textarea value={body} rows={5} className="py-1 rounded-sm border-0" />
      </label>
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Priority
        <select value={priority} className="py-1 rounded-sm border-0">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button className="mt-4 px-4 py-2 rounded-lg bg-green-dark text-yellow-main font-semibold hover:bg-green-main hover:text-green-dark">
        Add ticket
      </button>
    </form>
  )
}

export default TicketForm
