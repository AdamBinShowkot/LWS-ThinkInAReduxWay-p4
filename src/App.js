import { Fragment } from "react";
import MainComponent from "./components";
import './assets/css/index.css';
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    </Fragment>
  );
}

export default App;
