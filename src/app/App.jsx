import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store";
import createHistory from "history/createBrowserHistory";
import Header from "./components/Header";
import MovieDetail from "./containers/MovieDetail";
import Menu from "./containers/Menu";
import Footer from "./components/Footer";
import MovieGrid from "./containers/MovieGrid";

const browserHistory = createHistory();
const store = configureStore(browserHistory);

const Routes = () => (
  <div className="container" role="main">
    <ConnectedRouter history={browserHistory}>
      <div>
        <Menu />
        <br />
        <Switch>
          <Route path="/:type?" component={MovieGrid}  />
          <Route component={MovieDetail} path="/movie/:id" />
        </Switch>
      </div>
    </ConnectedRouter>
  </div>
);

const Main = () => (
  <div>
    <Header />
    <Routes />
    <Footer />
  </div>
);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
