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

    console.log('capital mounted');

  }, [])

  return (
    <div id="nca-capital-app-wrapper">
      NCA CAPITAL
      <sci-router-outlet></sci-router-outlet>
    </div>
  );
}

export default App;
