import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header, Auth, Register, LanguageChanger, Translater, Translations, SwitcherAuthorized, SwitcherNotAuthorized, VocabularyPage, LearningPage} from "./components";
import styles from './app.module.css';
import {connect} from 'react-redux'

const App = (props) => {


    let switcher = (sessionStorage.getItem('token')) ? <SwitcherAuthorized/> : <SwitcherNotAuthorized /> ;


    let translator = (
        <div>
            {/*<SwitcherAuthorized/>*/}
            {switcher}
            <LanguageChanger />
            <Translater />
            <Translations/>
        </div>
    );

    let vocabularypage = (
        <VocabularyPage />
    );

    let learningPage = (
        <LearningPage />
    );

    let showForm = (
        props.storeItems.window[0] ? <Auth />  : null
    );

    return (
        <div className={styles.App}>
            <Header/>
            <Router>
                <Switch>

                    <Route exact path = "/learning">
                        {learningPage}
                    </Route>

                    <Route exact path = "/vocabulary">
                        {vocabularypage}
                    </Route>

                    <Route path = "/" >
                        {showForm}
                        {translator}
                    </Route>

                </Switch>
            </Router>

        </div>
    );
}

export default connect(
    state => ({
        storeItems: state.window,
    }),
    dispatch =>({}),
)(App);
