import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const currentVan = useOutletContext()

  return (
    <section className="ml-5">
      <p className="mb-5"><span className="font-bold text-lg">${currentVan.price}</span>/day</p>
    </section>
  )
}