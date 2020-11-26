const initialState = {
    words: [],
}


let words = (state = initialState, action) => {


    switch (action.type) {

        case ('ADD_WORDS') : {
            return {
                ...words,
                words: [action.payload],
            }
        }

        default: return state;

    }
}

export default words