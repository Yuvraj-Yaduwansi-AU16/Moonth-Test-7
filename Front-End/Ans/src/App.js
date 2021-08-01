import React from 'react';
import Layout from './components/Layout';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route, idx) => {
          return <Route key={idx} {...route} />;
        })}
      </Switch>
    </Layout>
  );
};

export default App;
