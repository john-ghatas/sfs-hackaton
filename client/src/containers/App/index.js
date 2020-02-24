import React from "react";
import { withNavBar } from "../../HOC";
import getLocale from "../../helper/translate";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {getLocale("EN", "welcome")}
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default withNavBar(App);
