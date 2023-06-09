import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { UserFeedContextProvider } from './contexts/UserFeedContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { FollowContextProvider } from './contexts/FollowContext';
import IconContextProvider from './contexts/IconContext';
import UserProfileContextProvider from './contexts/UserProfileContext';

// Call make Server
makeServer();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UserFeedContextProvider>
          <FollowContextProvider>
              <IconContextProvider>
                <UserProfileContextProvider> 
                  <App /> 
                </UserProfileContextProvider>
              </IconContextProvider>
            </FollowContextProvider>
          </UserFeedContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
