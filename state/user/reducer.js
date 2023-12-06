const USER_ACTIONS = require('./action');

function userReducer(state = {}, action) {
    switch (action.type) {
        case USER_ACTIONS.UPDATE_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name
                }
            };
        case USER_ACTIONS.UPDATE_CONTACT:
            return {
                ...state,
                user: {
                    ...state.user,
                    contact: action.payload.contact
                }
            };
        default:
            return state;
    }
}

module.exports = userReducer;