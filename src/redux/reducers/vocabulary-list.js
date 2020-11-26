import axios from 'axios';
import {host} from "../../components/environment";



const initialState = {
    vocabularyList: [],
}


let vocabularyList = (state = initialState, action) => {


    if(action.type === 'VOCABULARY_PAGE_SHOW_WORDS') {
        return{
            vocabularyList: [action.payload],
        }
    }
    return state
}

export default vocabularyList;