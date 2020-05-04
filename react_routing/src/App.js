import React, { Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Pricing from './containers/Pricing/Pricing';
// import Features from './containers/Features/Features';
import NotFound from './components/NotFound';

import authContext from './context/authContext';

import './App.css';

const Features = React.lazy(() => {
  return import('./containers/Features/Features');
});

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <authContext.Provider value={isAuth}>
      <div className="container">
        <Navbar />
        {/* isAuth={isAuth} */}
        <section className="row flex-column m-4">
          <Switch>
            <Route path="/" exact>
              <Home setIsAuth={() => setIsAuth(!isAuth)} />
            </Route>
            <Route
              path="/Pricing"
              render={(props) => {
                // isAuth={isAuth}
                return <Pricing {...props} />;
              }}
            />
            {isAuth && (
              <Route
                path="/Features"
                render={(props) => {
                  return (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Features
                        {...props}
                        pageTitle="Features Page Custom title"
                      />
                    </Suspense>
                  );
                }}
              />
            )}
            <Route component={NotFound} />
          </Switch>
        </section>
      </div>
    </authContext.Provider>
  );
}

export default App;
