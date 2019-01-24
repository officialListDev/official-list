This project is the foundation for OfficialList.

Project Structure is broken out in such a way that:
  * All application logic & state will exist in one of the files found within ```containers/```.
  * All strictly render logic will exist in one of the files found within ```components/```.
    * Any isolated styles or test-runners will be contained in a nested folder with its related component or container.

Routing has been set up via configuration file, called ```route.config.js``` , found at the root level of ```src/```. The existing object structure may be observed for new routes to be added.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).