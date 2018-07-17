import React from "react";
import * as actions from "../app/filter-actions";
import { connect } from "react-redux";
import fetchMovies from "../movies/actions";
import fetchUpcomingMovies from "../upcoming/actions";

const selectClass = {
  background: "transparent",
  border: "transparent",
  color: "white"
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
  }

  onChangeLocation(e) {
    this.props.locationChanged(e.target.value);
    this.refreshMovieData();
  }

  onChangeLanguage(e) {
    this.props.languageChanged(e.target.value);
    this.refreshMovieData();
  }

  refreshMovieData() {
    if (window.location.pathname === "/") {
      this.props.fetchMovies(
        this.props.filter.language,
        this.props.filter.location
      );
    } else if (window.location.pathname === "/upcoming-movies") {
      this.props.fetchUpcomingMovies(
        this.props.filter.language,
        this.props.filter.location
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-primary navbar-dark fixed-top">
        <a className="navbar-brand" href="/">
          Just Cinemas
        </a>
        <div class="form-inline">
          <select
            className="form-control mr-sm-2"
            style={selectClass}
            value={this.props.filter.language}
            onChange={this.onChangeLanguage}
          >
            <option>Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>

          <select
            className="form-control mr-sm-2"
            style={selectClass}
            value={this.props.filter.location}
            onChange={this.onChangeLocation}
          >
            <option>Select Location</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {};

export default connect(
  state => ({
    filter: state.filter
  }),
  dispatch => ({
    locationChanged: location => dispatch(actions.locationChanged(location)),
    languageChanged: language => dispatch(actions.languageChanged(language)),
    fetchMovies: (lang, loc) => dispatch(fetchMovies(lang, loc)),
    fetchUpcomingMovies: (lang, loc) => dispatch(fetchUpcomingMovies(lang, loc))
  })
)(Header);
