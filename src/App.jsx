import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Host from './pages/Host/Host';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Layout from './components/Layout';
import '../server'

/* 
Challenge: 
1. Turn the "/host" path into a parent route and nest
"/host/income" and "/host/reviews" as children routes.
Then try entering "/host/income" in the URL and see what
happens.

2. See if you can figure out why it did what it did.
*/

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/host" element={<Host />}> 
              <Route path="/host/dashboard" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
