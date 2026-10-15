import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Header />

      <section> 
        <div className="home-container">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link className="home-page-find-van-button" to="/vans">Find your Van</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}