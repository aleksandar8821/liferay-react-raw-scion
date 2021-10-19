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

    console.log('header mounted');

  }, [])

  return (
    <div id="nca-header-app-wrapper">
      NCA HEADER
      <sci-router-outlet name="HEADER"></sci-router-outlet>
    </div>
  );
}

export default App;
