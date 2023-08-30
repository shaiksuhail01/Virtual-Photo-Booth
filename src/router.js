import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App'; 
import FrameSelector from './components/FrameSelector';
import FilterSelector from './components/FilterSelector';
import ShareOptions from "./components/ShareOptions";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/frame" component={FrameSelector} />
       <Route path="/filters" component={FilterSelector}/>
       <Route path="/share" component={ShareOptions}/>
      </Switch>
    </Router>
  );
};

export default Routes;
