import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import store from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="508430110644-1fonqvbm9bmbndlur21njc8k3h9cprbl.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>

)
