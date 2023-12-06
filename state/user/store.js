const { createStore } = require('../../my-redux-lib');
const userReducer = require('./reducer');

const initialState = {
    user: {
        name: "Alice",
        email: "alice@example.com",
        contact: "9485145654"
    }
};

const store = createStore(userReducer, initialState);

module.exports = store;