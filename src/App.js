// eslint-disable-next-line no-unused-vars
import httpClient from './services/api-services/common-service';
import React from 'react';
import { PortfolioContainer } from './portfolio-container/PortfolioContainer'
import { LoaderBar } from './utilities/commonUtils'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Toast from './utilities/Toast/Toast';

function App() {
  return (
    <div>
      <Toast />
      <LoaderBar />
      <PortfolioContainer />
    </div>
  );
}

export default App;
