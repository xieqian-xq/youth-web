import React from 'react';
import { Route } from 'react-router-dom';
import Home from './container/home/home';
import Test from './container/test/test';

const App = () => (
    <div className="container">
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Test" component={Test}/>
    </div>
);

export default App