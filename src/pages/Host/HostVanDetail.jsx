import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


export default function HostVanDetail() {
  const params = useParams()

  const [currentVan, setCurrentVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans[0]))
        
  }, [params.id])

  return (
    <>
      <Link to="/host/vans">
        <div className="flex items-center gap-1 ml-5">
          <FaArrowLeft className="text-gray-500" />
          <p>Back to all vans</p>
        </div>
      </Link>
      
      {currentVan && 
        <section className="flex flex-col bg-white m-5 rounded-md">
          <div className="flex items-center gap-4 w-full max-w-[100px] m-5">
            <img 
                src={currentVan.imageUrl} 
                alt={currentVan.name} 
                className="w-full h-auto rounded"
            />
            <div className="whitespace-nowrap">
              <i
                className={`inline-block py-1 px-3 text-white not-italic rounded ${
                  currentVan.type === "simple"
                    ? "bg-[#D66A48]"
                    : currentVan.type === "rugged"
                    ? "bg-[#0E4642]"
                    : "bg-[#121313]"
                }`}
              >
                {currentVan.type}
              </i>
              <h2>{currentVan.name}</h2>
              <p>
                <span className="font-bold">${currentVan.price}</span>
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