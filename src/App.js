import React, { Component } from 'react';
import ViewerTemplate from "./components/ViewerTemplate/ViewerTemplate";
import SpaceNavigator from "./components/SpaceNavigator/SpaceNavigator";

class App extends Component {
  render() {
    return (
      <div>
        <ViewerTemplate
          spaceNavigator={<SpaceNavigator/>}
        />
      </div>
    );
  }
}

export default App;
