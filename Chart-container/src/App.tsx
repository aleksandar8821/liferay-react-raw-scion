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

    console.log('chart mounted');

  }, [])

  return (
    <div id="nca-chart-app-wrapper" className="portlet-wrapper">
      NCA CHART
      <sci-router-outlet name="CHART"></sci-router-outlet>
    </div>
  );
}

export default App;
