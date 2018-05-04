let initialState = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    company: '',
    status_id: ''
}


function userInfo( state = initialState, action ){
    switch( action.type ) {
        case "UPDATE_USER":
            return Object.assign( action.payload );

        default: return state;
    }
}

export default userInfo;