import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
  const [hostVan, setHostVan] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setHostVan(data.vans))
  },[])
  
  const hostVanElements = hostVan.map((van) => {
    return (
      <Link key={van.id} to={`/host/vans/${van.id}`} className="bg-white rounded-md">
        <div className="flex items-center gap-4 w-full max-w-[100px] m-5">
          <img 
            src={van.imageUrl} 
            alt={van.name}
            className="w-full h-auto rounded" 
          />
          <div>
            <p className="font-bold whitespace-nowrap">{van.name}</p>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    )
  })
  
  return (
    <div className="flex flex-col gap-5 px-5">
      <h2>Your listed vans</h2>
      {hostVanElements}
    </div>
  )
}