import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store";
import createHistory from "history/createBrowserHistory";
import Header from "./Header";
import Home from "./Home";
import MovieDetail from "../movies/MovieDetail";
import UpComingMovie from "./UpComing";
import MenuBar from "./MenuBar";

const browserHistory = createHistory();

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <div>
      <MenuBar />
      <br />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={UpComingMovie} path="/upcoming-movie" />
        <Route component={MovieDetail} path="/movie/:id" />
      </Switch>
    </div>
  </ConnectedRouter>
);

const Main = () => (
  <div>
    <Header />
    <br />
    <div className = "container">
        <Routes />
    </div>
  </div>
);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
