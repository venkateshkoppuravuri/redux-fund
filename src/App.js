import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/CakeContainer/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer/IceCreamContainer";
import NewCakeContainer from "./components/CakeContainer/NewCakeContainer";
import ItemContainer from "./components/CakeContainer/ItemContainer";
import UserContainer from "./components/UserContainer/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
