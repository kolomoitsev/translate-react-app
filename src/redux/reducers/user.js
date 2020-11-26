const initialState = {
    user: [
        'token',
        'id',
        'name',
        'email',
        'gender',
        'login',
    ],
}


let user = (state = initialState, action) => {


    switch (action.type) {

        case ('AUTH') : {
            return {
                ...user,
                user: [action.payload]
            }
        }

        default: return state;

    }
}

export default user