import { combineReducers } from "redux";

import user from './user'
import vocabulars from './vocabulars'
import window from "./authwindow"
import words from "./foundwords";
import vocabularyList from "./vocabulary-list";

export default combineReducers({
    user,
    vocabulars,
    window,
    words,
    vocabularyList,
})