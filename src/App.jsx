import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Host from './pages/Host/Host';
import Layout from './components/Layout';
import '../server'

/**
 * Challenge:
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/host" element={<Host />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}
