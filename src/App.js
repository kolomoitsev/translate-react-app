import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header, Auth, Register, Translater} from "./components";
import styles from './app.module.css'


function App() {
  return (
    <div className="App">

      <Router>
          <Switch>
              <Route path = "/" >
                  <Header/>
                  <Auth/>
                  <Register/>
                  <Translater/>
              </Route>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
