import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const App:React.FC = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
