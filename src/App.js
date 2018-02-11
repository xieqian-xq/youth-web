import React from 'react';
import { Route } from 'react-router-dom';
import Home from './container/home/home';

const App = () => (
    <div className="container">
        <Route exact path="/" component={Home}/>
    </div>
);

export default App