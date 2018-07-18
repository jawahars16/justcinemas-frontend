import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store";
import createHistory from "history/createBrowserHistory";
import Header from "./components/Header";
import MovieDetail from "./containers/MovieDetail";
// import UpComingMovie from "./UpComing";
import MenuBar from "./containers/Menu";
import Footer from "./components/Footer";
import MovieList from "./containers/MovieList";

const browserHistory = createHistory();

const store = configureStore(browserHistory);

const nowShowing = () => <MovieList path="now-showing" />;
const upcoming = () => <MovieList path="upcoming" />;

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <div>
      <MenuBar />
      <br />
      <Switch>
        <Route exact component={nowShowing} path="/" />
        <Route exact component={upcoming} path="/upcoming" />
        <Route component={MovieDetail} path="/movie/:id" />
      </Switch>
    </div>
  </ConnectedRouter>
);

const Main = () => (
  <div>
    <Header />
    <div className="container" role="main">
      <Routes />
    </div>
    <Footer />
  </div>
);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
