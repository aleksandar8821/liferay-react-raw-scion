import { useEffect } from 'react';
import './App.css';

import { ApplicationConfig, MicrofrontendPlatform, OutletRouter } from '@scion/microfrontend-platform';
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

    console.log('mounted');

    const hostManifestPath = "/o/my-app/scion/manifest.json"

    const platformConfig: ApplicationConfig[] = [
      { symbolicName: 'host-app', manifestUrl: hostManifestPath },
      { symbolicName: 'header-app', manifestUrl: `http://localhost:4201/manifest.json` }
    ];

    async function init() {
      // Start the platform
      await MicrofrontendPlatform.startHost(platformConfig, { symbolicName: 'host-app' });

      Beans.get(OutletRouter).navigate(`http://localhost:4201/header-app.html`, { outlet: 'HEADER' });

    }

    init();
  }, [])

  return (
    <div id="nca-host-app-wrapper">
      NCA
      <sci-router-outlet name="HEADER"></sci-router-outlet>
    </div>
  );
}

export default App;
