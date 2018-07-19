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
      this.props.fetchMovies("NOW_SHOWING", language, location);
    } else if (window.location.pathname === "/upcoming-movie") {
      this.props.fetchMovies("UPCOMING", language, location);
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
          {["All Languages", "English", "Hindi"].map(lang => (
            <option>{lang}</option>
          ))}
        </select>

        <select
          className="form-control mr-sm-2"
          style={selectClass}
          value={this.props.filter.location}
          onChange={this.onChangeLocation}
        >
         {["All Locations", "Pune", "Delhi", "Bangalore"].map(loc => (
            <option>{loc}</option>
          ))}
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
    fetchMovies: (type, lang, loc) => dispatch(fetchMovies(type, lang, loc))
  })
)(Filter);
