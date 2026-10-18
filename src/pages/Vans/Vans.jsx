import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */

export default function Vans() {
  const [vans, setVans] = useState([]) 

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans)
    )
  }, [])
  console.log(vans)

  const vansElements = vans.map((van) => {
    return (
      <Link key={van.id} to={`/vans/${van.id}`}>
        <div className="van-tile">
          <img alt={van.name} src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    )
  })



  return (
    <section className="van-list-container">
      <h2>Explore our van options</h2>
      <div className="van-list">
        {vansElements}
      </div>
    </section>
  )
}