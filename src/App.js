import React, { Component } from 'react';
import { Provider } from "react-redux";

import store from "./redux/store";
import Map from "./screens/Map";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Map />
      </Provider>
    );
  }
}

export default App;
