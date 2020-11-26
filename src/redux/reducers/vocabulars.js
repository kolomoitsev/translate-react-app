import axios from 'axios';
import {host} from "../../components/environment";



const initialState = {
    vocabulary: [],
}


let vocabulary = (state = initialState, action) => {


    if(action.type === 'TRIGGER_BUTTON_ADD') {
        return{
            vocabulary: [action.payload],
        }
    }
    return state
}

export default vocabulary;