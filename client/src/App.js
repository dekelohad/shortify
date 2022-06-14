import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as ROUTES from './constants/routes';
import { Admin, NewUrl, Reports, Redirect, NotFound } from './pages';
import { Layout } from './components';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path={ROUTES.ADMIN} element={<Admin />} />
          <Route path={ROUTES.NEW_URL} exact={true} element={<NewUrl />} />
          <Route path={ROUTES.REPORTS} exact={true} element={<Reports />} />
          <Route path={ROUTES.REDIRECT} exact={true} element={<Redirect />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
