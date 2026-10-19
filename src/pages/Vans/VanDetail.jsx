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
    <section className="bg-[#FDF5E9] max-w-[900px] mx-auto py-[30px] px-5">
      <img 
      src={vanDetail.imageUrl} 
      alt={vanDetail.name}
      className="block w-full max-w-[600px] h-auto rounded-[5px] mb-5"
      />
      
      <i
        className={`inline-block py-2 px-3 text-white not-italic rounded mt-[5px] ${
          vanDetail.type === "simple"
            ? "bg-[#D66A48]"
            : vanDetail.type === "rugged"
            ? "bg-[#0E4642]"
            : "bg-[#121313]"
        }`}
      >
        {vanDetail.type}
      </i>

      <h1 className="my-[15px]">{vanDetail.name}</h1>
      <p className="leading-[1.6] mb-5">{vanDetail.description}</p>
      <h2 className="mb-5">${vanDetail.price}<span>/day</span></h2>

      <button className="block w-full max-w-[600px] border-0 cursor-pointer font-[inherit] text-base text-center bg-[#ff8c38] text-white py-3 px-5 rounded-[5px]">
        Rent this van
      </button>
    </section>
  )
}