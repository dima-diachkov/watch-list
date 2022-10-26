import React from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { CardContainer } from './components/CardContainer';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <CardContainer />
        <Footer />
      </Provider>

    </>

  );
}

export default App;