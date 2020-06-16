import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header, Auth, Register, LanguageChanger, Translater} from "./components";
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.App}>

      <Router>
          <Switch>
              <Route path = "/" >
                  <Header/>
                  <LanguageChanger/>
                  {/*<Auth/>*/}
                  {/*<Register/>*/}
                  <Translater/>
              </Route>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
