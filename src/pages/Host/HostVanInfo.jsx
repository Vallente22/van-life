import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
  const currentVan = useOutletContext()

  return (
    <section className="mx-5">
      <h4 className="my-5 mt-0"><span className="font-bold">Name:</span> {currentVan.name}</h4>
      <h4 className="my-5"><span className="font-bold">Category:</span> {currentVan.type}</h4>
      <h4 className="my-5"><span className="font-bold">Description:</span> {currentVan.description}</h4>
    </section>
  )
}