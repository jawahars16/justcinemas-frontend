import React from "react";
import * as actions from "../actions/filter";
import { connect } from "react-redux";
import fetchMovies from "../actions/movieList";
// import fetchUpcomingMovies from "../upcoming/actions";

const selectClass = {
  background: "transparent",
  border: "transparent",
  color: "white"
};

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
  }

  onChangeLocation(e) {
    this.props.locationChanged(e.target.value);
    this.refreshMovieData(this.props.filter.language, e.target.value);
    window.localStorage.setItem("location", e.target.value);
  }

  onChangeLanguage(e) {
    this.props.languageChanged(e.target.value);
    this.refreshMovieData(e.target.value, this.props.filter.location);
    window.localStorage.setItem("language", e.target.value);
  }

  refreshMovieData(language, location) {
    if (window.location.pathname === "/") {
      this.props.fetchMovies(language, location);
    } else if (window.location.pathname === "/upcoming-movie") {
      this.props.fetchUpcomingMovies(language, location);
    }
  }

  render() {
    return (
      <div class="form-inline">
        <select
          className="form-control mr-sm-2"
          style={selectClass}
          value={this.props.filter.language}
          onChange={this.onChangeLanguage}
        >
          <option>All Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>

        <select
          className="form-control mr-sm-2"
          style={selectClass}
          value={this.props.filter.location}
          onChange={this.onChangeLocation}
        >
          <option>All Location</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>
    );
  }
}

export default connect(
  state => ({
    filter: state.filter
  }),
  dispatch => ({
    locationChanged: location => dispatch(actions.locationChanged(location)),
    languageChanged: language => dispatch(actions.languageChanged(language)),
    fetchMovies: (lang, loc) => dispatch(fetchMovies(lang, loc))
  })
)(Filter);
