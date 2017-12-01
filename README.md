Turo <a href="https://github.com/relayrides/coding-exercise">Coding-Exercise</a>


## Quick start

This project uses the Hotwire Rental Car Shopping API. You'll need an API key for it.

1. Clone this repo
2. Move to the appropriate directory.<br />
3. Run `yarn install` to install dependencies.
4. Generate .env file with property `API_KEY`. This will be the Hotwire API key.
4. Run `yarn start` to start the server at http://localhost:3000.

## Building
This app can also be built and hosted from any webserver. Use the command `yarn build` and then look in the `./build` directory.

## Software
This is based off of React-Boilerplate. It includes lots of awesome features that I like to include on large projects.

- React
- Redux
    - Client side state management. Great for time traveling, debugging, and easy reasoning of application state.
- Redux-sagas 
    - Asynchronous side effect manager for Redux. I prefer this over the promise based architecture of Thunks.
- Reselect
    - Memoization utility. Useful for encapsulating business logic that shouldn't be stored in state. 
- Immutable-js
    - This came as part of the boilerplate project. I would have liked to remove it and replace it with redux-immutable-state-invariant.

