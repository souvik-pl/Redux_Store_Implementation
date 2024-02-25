# Redux Store
This library is a simple implementation of the Redux store with the core functionalities - `getState`, `subscribe`, and `dispatch`. It's a minimalistic demonstration of how a Redux store can be created.

## Installation
To use this library, follow these steps:
1. **Install Dependencies**: Run `npm install` to install the required dependencies.
2. **Build the Library**: Run `npm run prepare` to build the library.

## Functions
### `createStore(reducer, initialState)`
Creates a Redux store with the specified reducer and initial state.

- **Parameters**
    - `reducer`: A function that specifies how the state should change in response to an action.
    - `initialState`: An object which determines the initial state of the store.
- **Returns**
    - `getState`: Retrieves the current state of the store.
    - `subscribe(callback)`: Adds a change listener to the store. It returns an object which contains an `unsubscribe` method in it.
    - `dispatch(action)`: Dispatches an action, triggering a state change.