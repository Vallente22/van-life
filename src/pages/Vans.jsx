import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
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
      <div className="van-tile" key={van.id}>
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
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