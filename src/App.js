import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RouteLoader from './components/RouteLoader';
import { routes } from './routes/routesConfig';

function App() {
  return (
    <Layout>
      <RouteLoader>
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </RouteLoader>
    </Layout>
  );
}

export default App;
