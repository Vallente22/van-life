import bgImg from "../assets/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <section className="bg-[#FDF5E9] pb-px">
      <img src={bgImg} className="block w-full h-auto" />

      <div className="mx-5">
        <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who knows firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      
      <div className="bg-[#FEC482] m-5 pt-[30px] px-5 pb-5">
        <h3>Your destination is waiting.<br />Your van is ready.</h3>
        <Link 
          to="/vans" 
          className="inline-block bg-black text-white no-underline rounded-[5px] py-3 px-5 mt-5"
        >
          Explore our vans
        </Link>
      </div>
    </section>
  )
}