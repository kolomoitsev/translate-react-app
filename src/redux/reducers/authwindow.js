const initialState = {
    window: [
        false,
    ],
}


let window = (state = initialState, action) => {


    switch (action.type) {

        case ('SHOW_MODAL') : {
            return {
                ...window,
                window: [action.payload]
            }
        }

        default: return state;

    }
}

export default window