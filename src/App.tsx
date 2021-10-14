import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {  MicrofrontendPlatform, OutletRouter, PlatformConfig } from '@scion/microfrontend-platform';
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

    setTimeout(() => {
      
      
      const host: any = document.getElementById('outletHost');
      
      host.innerHtml = `<sci-router-outlet name="HEADER"></sci-router-outlet>`;
      
    }, 3000);


    const constants = {
      hostAppUrl: "http://localhost:4200",
      headerAppUrl: "http://localhost:4201",
      navbarAppUrl: "http://localhost:4202",
      capitalAppUrl: "http://localhost:4203",
      transactionAppUrl: "http://localhost:4204",
      chartAppUrl: "http://localhost:4205",
      
      manifest: "manifestScion.json",
      hostManifestRelativeURL: ""
      };

     const 	 platformConfig = [
  {symbolicName: 'host-app', manifestUrl: `${constants.manifest}`},
  {symbolicName: 'header-app', manifestUrl: `manifestScionHeader.json`}
  // {symbolicName: 'navbar-app', manifestUrl: `${constants.navbarAppUrl}/${constants.manifest}`},
  // {symbolicName: 'capital-app', manifestUrl: `${constants.capitalAppUrl}/${constants.manifest}`},
  // {symbolicName: 'chart-app', manifestUrl: `${constants.chartAppUrl}/${constants.manifest}`},
  // {symbolicName: 'transactions-app', manifestUrl: `${constants.transactionAppUrl}/${constants.manifest}`},
  ];

   async function init() {
    // Start the platform
    await MicrofrontendPlatform.startHost(platformConfig, {symbolicName: 'host-app'});
  
    Beans.get(OutletRouter).navigate(`http://localhost:4201/header-app.html`, {outlet: 'HEADER'});
  
    // Beans.get(OutletRouter).navigate(`${constants.navbarAppUrl}/navbar-app.html`, {outlet: 'NAVBAR'});
  
    // Beans.get(OutletRouter).navigate(`${constants.chartAppUrl}/index.html`, {outlet: 'MAIN-SCREEN-ASIDE'});
  
    // Beans.get(OutletRouter).navigate(`${constants.capitalAppUrl}/index.html`);
    }

    init();
  console.log('mounted');
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <div id="outletHost" ></div>

      <sci-router-outlet name="HEADER"></sci-router-outlet>

    </div>
  );
}

export default App;
