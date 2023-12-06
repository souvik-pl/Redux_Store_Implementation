# Custom Redux Store
This project is a simple implementation of the Redux store with the core functionalities - `getState`, `subscribe`, and `dispatch`. It's a minimalistic demonstration of how a Redux store can be created.

## Getting Started
### Installation
Follow the steps below to get started with this project.

1. Make sure you have Node.js installed on your machine (preferrably Node v18.17.1).
2. Clone the repository: `git clone [repository-url]`
3. Navigate to the project folder: `cd [project-folder]`
4. Run the project: `node index`

### Usage
Modify the `index.js` file and the files inside `state/user` directory to implement your custom Redux logic.

## Functions
### `createStore(reducer, initialState)`
Creates a Redux store with the specified reducer and initial state.

- **Parameters**
    - `reducer`: A function that specifies how the state should change in response to an action.
- **Returns**
    - `getState`: Retrieves the current state of the store.
    - `subscribe(callback)`: Adds a change listener to the store.
    - `dispatch(action)`: Dispatches an action, triggering a state change.