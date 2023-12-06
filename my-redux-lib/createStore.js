const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];

    const getState = () => {
        return state;
    };

    const subscribe = (callback) => {
        listeners.push(callback);

        //unsubscribe function
        return function () {
            const index = listeners.indexOf(callback);
            listeners.splice(index, 1);
        }
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(callback => callback());

        return action;
    };

    return {
        getState,
        subscribe,
        dispatch
    }
};

module.exports = createStore;