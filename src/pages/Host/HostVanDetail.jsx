import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <section>
        <Link to="/host/vans">
          <div className="flex items-center gap-1 ml-5">
            <FaArrowLeft className="text-gray-500" />
            <p>Back to all vans</p>
          </div>
        </Link>
        
        {hostVanDetail && 
          <div>
            <p>{hostVanDetail.name}</p>
          </div> 
        }
      </section>
    </>
  )
}