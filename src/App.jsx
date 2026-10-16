import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import HostLayout from './pages/Host/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Layout from './components/Layout';
import '../server'

/**
 * Challenge: Make the HostLayout component!
 * The HostLayout should use Links to navigate to the following
 * routes:
 *    * Dashboard ("/host")
 *    * Income ("/host/income")
 *    * Reviews ("/host/reviews")
 * Then replace the parent "/host" route's element below with the
 * new HostLayout component you made.
 *
 * NOTE: The dashboard route/page will be gone for now, but don't fret.
 * We'll be fixing that in the next lesson.
 */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="host" element={<HostLayout />}> 
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
