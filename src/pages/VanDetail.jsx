import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function VanDetail() {
  const params = useParams()

  /**
   * Challenge part 2:
   * Using the endpoint set up (with mirage js), fetch the data
   * for the van with the current ID from params.id. Log the data
   * that comes back to the console.
   * 
   * Hint: the endpoint is a GET request to `/api/vans/:vanid`
   */

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [params.id])

  return <h1>van detail goes here</h1>
}