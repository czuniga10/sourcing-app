import { GET_CARD } from '../actions/actionCreators';

let cardState = {};

function profileInfo( state = cardState, action ){
    switch( action.type ) {
        case GET_CARD:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default profileInfo