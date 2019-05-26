import React from "react";
import Item from "./components/item.js";
import Header from "./components/header.js";
import FullInfo from "./components/full_info.js";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './styles/App.css';

const NotFound = () => <p>404 Not found</p>;


export class App extends React.Component {
  render() {
    return (
      <Router>
           <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/film/:id" component={FullInfo} />
            <Route path="/search" component={Header} />
            <Route path="*" component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

export default App;