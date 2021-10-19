import { useEffect } from 'react';
import './App.css';

import { MicrofrontendPlatform, OutletRouter } from '@scion/microfrontend-platform';
import { Beans } from '@scion/toolkit/bean-manager';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sci-router-outlet': any;
    }
  }
}

function App() {

  useEffect(() => {

    console.log('navbar mounted');

  }, [])

  return (
    <div id="nca-navbar-app-wrapper">
      NCA NAVBAR
      <sci-router-outlet name="NAVBAR"></sci-router-outlet>
    </div>
  );
}

export default App;
