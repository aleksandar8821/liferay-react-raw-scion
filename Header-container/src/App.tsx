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

    Liferay.on('randomNumber', function (event: any) {
      var number = event.number;

      const messageContainer: any = document.getElementById('headerReceivedMessage');
      messageContainer.innerHTML = number;

    });

    Liferay.on('hostTopicMessage', function (event: any) {
      // var message = event.message;

      // const messageContainer: any = document.getElementById('headerReceivedMessage');
      // messageContainer.innerHTML = message;

      console.log('Message received from host', event.message);
      

    });

  }, [])

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    const randomNumber = getRandomInt(1000);
    const message = 'From header ' + randomNumber;

    Liferay.fire('headerToNavbarIPC', {
      message: message
    })
  }

  return (
    <div id="nca-header-app-wrapper" onClick={handleClick}>
      NCA HEADER
      <div id="headerReceivedMessage"></div>
      <sci-router-outlet name="HEADER"></sci-router-outlet>
    </div>
  );
}

export default App;
