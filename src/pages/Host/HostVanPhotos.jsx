import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const currentVan = useOutletContext()

  return (
    <section className="m-5">
      <img 
        src={currentVan.imageUrl} 
        alt={currentVan.name}
        className="w-full h-auto rounded"
      />
    </section>
  )
}