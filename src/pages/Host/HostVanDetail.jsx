import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


export default function HostVanDetail() {
  const params = useParams()

  const [hostVanDetail, setHostVanDetail] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setHostVanDetail(data.vans[0]))
        
  }, [params.id])

  return (
    <>
      <Link to="/host/vans">
        <div className="flex items-center gap-1 ml-5">
          <FaArrowLeft className="text-gray-500" />
          <p>Back to all vans</p>
        </div>
      </Link>
      
      {hostVanDetail && 
        <section className="flex flex-col bg-white m-5 rounded-md">
          <div className="flex items-center gap-4 w-full max-w-[100px] m-5">
            <img 
                src={hostVanDetail.imageUrl} 
                alt={hostVanDetail.name} 
                className="w-full h-auto rounded"
            />
            <div className="whitespace-nowrap">
              <i
                className={`inline-block py-1 px-3 text-white not-italic rounded ${
                  hostVanDetail.type === "simple"
                    ? "bg-[#D66A48]"
                    : hostVanDetail.type === "rugged"
                    ? "bg-[#0E4642]"
                    : "bg-[#121313]"
                }`}
              >
                {hostVanDetail.type}
              </i>
              <h2>{hostVanDetail.name}</h2>
              <p>
                <span className="font-bold">${hostVanDetail.price}</span>
                /day
              </p>
            </div>
          </div>
          <nav className="flex gap-5 px-5 pb-5">
            <NavLink>
              Details
            </NavLink>
            <NavLink>
              Pricing
            </NavLink>
            <NavLink>
              Photos
            </NavLink>
          </nav>
        </section>
      }
    </>
  )
}