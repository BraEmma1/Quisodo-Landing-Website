import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stay from './pages/Stay';
import RoomDetails from './pages/RoomDetails';
import Experiences from './pages/Experiences';
import Boats from './pages/Boats';
import Gallery from './pages/Gallery';
import Journal from './pages/Journal';
import Reflections from './pages/Reflections';
import Story from './pages/Story';
import Arrival from './pages/Arrival';
import Assistance from './pages/Assistance';
import Contact from './pages/Contact';
import Reserve from './pages/Reserve';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Fishing from './pages/Fishing';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/rooms/:roomId" element={<RoomDetails />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/story" element={<Story />} />
          <Route path="/arrival" element={<Arrival />} />
          <Route path="/assistance" element={<Assistance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/fishing" element={<Fishing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
