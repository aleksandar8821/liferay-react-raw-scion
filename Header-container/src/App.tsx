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

declare var Liferay: any

function App() {

  useEffect(() => {

    console.log('header mounted');

    Liferay.on('randomNumber',function(event: any) {
      var number = event.number;

      const messageContainer: any = document.getElementById('headerReceivedMessage');
      messageContainer.innerHTML = number;

     });

  }, [])

  return (
    <div id="nca-header-app-wrapper">
      NCA HEADER
      <div id="headerReceivedMessage"></div>
      <sci-router-outlet name="HEADER"></sci-router-outlet>
    </div>
  );
}

export default App;
