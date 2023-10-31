'use client'

import { API_URL } from '@/app/utils/constants'
import { delay } from '@/app/utils/delay'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function TicketForm() {
  const router = useRouter()

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    setIsLoading(true)
    e.preventDefault()

    const formFields = { author, title, body, priority }

    await delay(1000)
    const res = await fetch(`${API_URL}/tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formFields),
    })

    if (res.status === 201) {
      setIsLoading(false)
      router.refresh()
    }
  }

  return (
    <form
      className="flex flex-col w-10/12 py-8 px-12 mb-4 bg-yellow-light rounded-xl border-2 border-green-dark drop-shadow-lg lg:w-1/2"
      onSubmit={handleOnSubmit}
    >
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Author
        <input
          type="text"
          value={author}
          className="py-1 px-2 rounded-sm border-0"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Title
        <input
          type="text"
          value={title}
          className="py-1 px-2 rounded-sm border-0"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Body
        <textarea
          value={body}
          rows={5}
          className="py-1 px-2 rounded-sm border-0"
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <label className="flex flex-col mt-2 mb-4 text-md text-green-dark font-medium">
        Priority
        <select
          value={priority}
          className="py-1 px-2 rounded-sm border-0"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-green-dark text-yellow-main font-semibold hover:bg-green-logo hover:text-green-dark"
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add ticket'}
      </button>
    </form>
  )
}

export default TicketForm
