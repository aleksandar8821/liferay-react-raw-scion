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

declare var Liferay: any;

function App() {

  const localConstants = {
    headerAppUrl: "http://localhost:4201",
    navbarAppUrl: "http://localhost:4202",
    capitalAppUrl: "http://localhost:4203",
    transactionAppUrl: "http://localhost:4204",
    chartAppUrl: "http://localhost:4205",

    manifest: "manifest.json"
  };

  useEffect(() => {

    console.log('host mounted');

    const hostManifestPath = "/o/host-app/scion/manifest.json"

    const platformConfig: ApplicationConfig[] = [
      { symbolicName: 'host-app', manifestUrl: hostManifestPath },
      { symbolicName: 'header-app', manifestUrl: localConstants.headerAppUrl + '/' + localConstants.manifest },
      { symbolicName: 'navbar-app', manifestUrl: localConstants.navbarAppUrl + '/' + localConstants.manifest },
      { symbolicName: 'capital-app', manifestUrl: localConstants.capitalAppUrl + '/' + localConstants.manifest },
      { symbolicName: 'chart-app', manifestUrl: localConstants.chartAppUrl + '/' + localConstants.manifest },
      { symbolicName: 'transactions-app', manifestUrl: localConstants.transactionAppUrl + '/' + localConstants.manifest }
    ];

    async function init() {
      // Start the platform
      await MicrofrontendPlatform.startHost(platformConfig, { symbolicName: 'host-app' });

      Beans.get(OutletRouter).navigate(`${localConstants.headerAppUrl}/header-app.html`, { outlet: 'HEADER' });
      Beans.get(OutletRouter).navigate(`${localConstants.navbarAppUrl}/navbar-app.html`, { outlet: 'NAVBAR' });
      // Beans.get(OutletRouter).navigate(`${localConstants.chartAppUrl}/index.html`, { outlet: 'MAIN-SCREEN-ASIDE' });
      Beans.get(OutletRouter).navigate(`${localConstants.capitalAppUrl}/index.html`);

      Beans.get(OutletRouter).navigate(`${localConstants.chartAppUrl}/index.html`, { outlet: 'CHART' });
      Beans.get(OutletRouter).navigate(`${localConstants.transactionAppUrl}/index.html`, { outlet: 'MAIN-SCREEN-ASIDE' });


    }

    init();

  }, [])

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {

    Liferay.fire('randomNumber', {
      number: getRandomInt(1000)
    });
  }

  return (
    <div id="nca-host-app-wrapper" onClick={handleClick} style={{cursor: 'pointer'}}>
      <span>NCA HOST</span>
    </div>
  );
}

export default App;
