import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Vans() {
  const [vans, setVans] = useState([]) 

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans)
    )
  }, [])

  const vansElements = vans.map((van) => {
    return (
      <Link key={van.id} to={`/vans/${van.id}`}>
        <div className="block font-bold">
          <img 
            alt={van.name} 
            src={van.imageUrl}
            className="w-full h-auto rounded"
          />

          <div className="flex justify-between items-start">
            <h3>{van.name}</h3>
            <p className="text-lg">${van.price}
              <span className="flex justify-end text-xs font-normal">
                /day
              </span>
            </p>
          </div>
          <i
            className={`inline-block py-2 px-3 text-white not-italic rounded ${
              van.type === "simple"
                ? "bg-[#D66A48]"
                : van.type === "rugged"
                ? "bg-[#0E4642]"
                : "bg-[#121313]"
            }`}
          >
            {van.type}
          </i>
        </div>
      </Link>
    )
  })



  return (
    <section className="bg-[#FDF5E9] pb-[30px]">
      <h2 className="mt-0 ml-5 my-5">Explore our van options</h2>

      <div className="grid grid-cols-2 gap-5 px-5">
        {vansElements}
      </div>
    </section>
  )
}