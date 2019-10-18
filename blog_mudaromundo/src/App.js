import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

import { Landing, Materia } from './pages';
import { Navbar, Footer } from './components';
import ModalContextProvider from './contexts/modal-context';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = "UA-149540076-1";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname); 
});

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <ModalContextProvider>
          <Navbar />
          <Switch>
            <Route  path="/:materia" component={Materia} />
            <Route path="/" component={Landing} />
          </Switch>
          <Footer />
        </ModalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
