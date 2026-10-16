import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function VanDetail() {
  const params = useParams()

  const [vanDetail, setVanDetail] = useState([])

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVanDetail(data.vans))
  }, [params.id])

  return (
    <section className="van-detail-container">
      <img src={vanDetail.imageUrl} alt={vanDetail.name} />
      <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
      <h1>{vanDetail.name}</h1>
      <p>{vanDetail.description}</p>
      <h2>${vanDetail.price}<span>/day</span></h2>
      <button className="link-button">Rent this van</button>
    </section>
  )
}