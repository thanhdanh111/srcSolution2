
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter,useLocation } from 'react-router-dom';
import Home from './Page/Home';
import Product from './Page/Product';

import Navbar from './component/Navbar';
import Footer from './component/Footer';

import React from 'react';
import DetailProduct from './Page/DetailProduct';
import { createBrowserHistory } from 'history';
import DisplayPruct from './Page/DisplayPruct';

function App() {
  const history = createBrowserHistory();

  return (
     <>
      <Router history={history}>
        <Navbar />
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/product' exact component={Product}/>
          <Route path='/productdisplay' exact component={DisplayPruct}/>
          <Route  path="/product/:slug"exact component={DetailProduct} />
          </Switch>
       <Footer />
    </Router>
    </>
  );
}

export default App;
