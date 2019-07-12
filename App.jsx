import React from "react";
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
export default class App extends React.Component {

  constructor(props){
    super(props);

  }
  render(){
        return (
          <div>
              <Route exact path='/' component={Home} />
              <Route path='/cart' component={Cart} />
          </div>
      );
  }
};
