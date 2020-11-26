import axios from 'axios';
import {host} from "../environment";

let fetchWords = async (word) =>{
    const {data: {word_contexts}} = await axios.get(`${host}/api/v1/search?word=${word}&fromLang=ru&toLang=en`)


    let returnData = {
        word_contexts,
    }

    return returnData;

}

export default fetchWords;