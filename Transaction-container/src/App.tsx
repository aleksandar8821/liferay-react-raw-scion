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

    console.log('transaction mounted');

  }, [])

  return (
    <div id="nca-transaction-app-wrapper">
      NCA TRANSACTION
      <sci-router-outlet name="MAIN-SCREEN-ASIDE"></sci-router-outlet>
    </div>
  );
}

export default App;
