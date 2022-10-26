import React from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { CardContainer } from './components/CardContainer';
import { Trailers } from './components/Trailers';

function App() {
  return (
    <>
      <NavBar />
      <CardContainer />
      <Trailers />
      <Footer />
    </>
  );
}

export default App;
