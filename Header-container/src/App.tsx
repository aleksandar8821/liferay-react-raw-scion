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

    async function connect() {
      // Connect to the platform
      await MicrofrontendPlatform.connectToHost({ symbolicName: 'header-app' });

      Beans.get(OutletRouter).navigate(`http://localhost:4201/header-app.html`, { outlet: 'HEADER' });
    }

    // connect();
  }, [])

  return (
    <div id="nca-host-app-wrapper">
      NCA HEADER
      {/* <sci-router-outlet name="HEADER"></sci-router-outlet> */}
    </div>
  );
}

export default App;
