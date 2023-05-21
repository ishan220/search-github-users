import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import { GitHubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
// import reportWebVitals from '../reportWebVitals'
const root = ReactDOM.createRoot(document.getElementById('root'))
//domain = 'dev-lyif94d1.eu.auth0.com'
//clientId = '4cmlJHwufdtnnHH08HcTOur60wGDgMxC'
//clientsecret ='ItSQC8JcQnILGn_beghMNfcJMw9zUi5Qbo0LSyrNowVSqeFDCqWK_vTjsMKvT9_Y'
root.render(
  <>
    <React.StrictMode>
      <Auth0Provider
        domain='dev-lyif94d1.eu.auth0.com'
        clientId='4cmlJHwufdtnnHH08HcTOur60wGDgMxC'
        redirectUri={window.location.origin}
      >
        <GitHubProvider>
          <App />
        </GitHubProvider>
      </Auth0Provider>
    </React.StrictMode>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
