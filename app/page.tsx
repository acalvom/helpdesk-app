import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col m-16">
      <h2 className="py-2 text-lg text-yellow-main font-bold">Dashboard</h2>
      <p className="text-green-dark">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore,
        exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus
        iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid
        sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur
        consequuntur ex mollitia quaerat?
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="px-4 py-2 rounded-lg bg-yellow-main text-green-dark font-semibold hover:bg-green-dark hover:text-yellow-main">
            View Tickets
          </button>
        </Link>
      </div>
      <h2 className="py-4 text-lg text-yellow-main font-bold">Company Updates</h2>
      <div className="p-4 mb-4 bg-primary-extra-light rounded-xl border-2 border-green-main drop-shadow-lg">
        <h3 className="pt-1 pb-4 text-md text-green-main font-semibold">
          New member of the web dev team...
        </h3>
        <p className="text-md text-green-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis
          possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.
        </p>
      </div>
      <div className="p-4 mb-4 bg-primary-extra-light rounded-xl border-2 border-green-main drop-shadow-lg">
        <h3 className="pt-1 pb-4 text-md text-green-main font-semibold">New website live!</h3>
        <p className="text-md text-green-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis
          possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti,
          assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur
          enim quas.
        </p>
      </div>
    </main>
  )
}
