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
      <Link key={van.id} to="vans/:id">
        <h2 className="text-red-500 text-2xl mt-4">
          {van.name}
        </h2>
      </Link>
    )
  })
  
  return (
    <div>
      {hostVanElements}
    </div>
  )
}