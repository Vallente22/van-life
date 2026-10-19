import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section 
      className="relative isolate w-full h-[90vh] bg-cover bg-center bg-no-repeat text-white p-[30px]"
      style={{ backgroundImage: "url('/src/assets/home-hero.png')" }}
    >
      <div className="absolute inset-0 -z-10 bg-black/45" />
      
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      
      <Link 
        to="/vans" 
        className="block w-full max-w-[600px] my-[50px] bg-[#ff8c38] text-white py-3 px-5 rounded-[5px] text-center"
      >
        Find your Van
      </Link>
    </section>
  )
}