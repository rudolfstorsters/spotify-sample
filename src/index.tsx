import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxStore from './core/ReduxStore/ReduxStore'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';

import HomePage from './pages/home/HomePage';
import ViewPage from './pages/view/ViewPage';

import reportWebVitals from './reportWebVitals';

import * as coreActions from './core/app/core/coreActions'

ReduxStore.initialize();
ReduxStore.dispatch(coreActions.startApp())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={ReduxStore.store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />} />
        <Route
          path="/view"
          element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
