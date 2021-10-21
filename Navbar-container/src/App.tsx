import { useEffect } from 'react';
import './App.css';

import { MicrofrontendPlatform, OutletRouter, MessageClient } from '@scion/microfrontend-platform';
import { Beans } from '@scion/toolkit/bean-manager';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sci-router-outlet': any;
    }
  }
}

declare var Liferay: any


function App() {

  useEffect(() => {

    console.log('navbar mounted');

    Liferay.on('headerToNavbarIPC', (event: any) => {

      console.log('header to navbar received in navbar', event.message);
      
    })


  }, [])

  return (
    <div id="nca-navbar-app-wrapper">
      NCA NAVBAR
      <sci-router-outlet name="NAVBAR"></sci-router-outlet>
    </div>
  );
}

export default App;
