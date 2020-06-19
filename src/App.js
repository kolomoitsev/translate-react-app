import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header, Auth, Register, LanguageChanger, Translater, Translations, SwitcherAuthorized, SwitcherNotAuthorized, VocabularyPage} from "./components";
import styles from './app.module.css';

function App() {

    let translator = (
        <div>
            <SwitcherAuthorized/>
            <LanguageChanger />
            <Translater />
            <Translations/>
        </div>
    );

    let vocabularypage = (
        <div>
            <VocabularyPage />
        </div>
    );

  return (
    <div className={styles.App}>
        <Header/>
      <Router>
          <Switch>

              <Route exact path = "/vocabulary">
                  {vocabularypage}
              </Route>

              <Route path = "/" >
                  {translator}
              </Route>

          </Switch>
      </Router>

    </div>
  );
}

export default App;
