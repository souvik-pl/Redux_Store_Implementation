const store = require('./state/user/store');
const USER_ACTIONS = require('./state/user/action');

//intial state
console.log(store.getState());

//Adding state change listener
store.subscribe(() => {
    console.log("----------------------------");
    console.log("State has been updated");
    console.log(store.getState());
});

//Dispatching an action with new data
store.dispatch({
    type: USER_ACTIONS.UPDATE_NAME,
    payload: {
        name: "Alice Johnson"
    }
});

store.dispatch({
    type: USER_ACTIONS.UPDATE_CONTACT,
    payload: {
        contact: "9878125463"
    }
});