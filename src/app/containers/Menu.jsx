import React from "react";
import { withRouter } from "react-router-dom";
import MenuComponent from "../components/Menu";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <MenuComponent
        onClickNowShowing={() => this.navigate("/")}
        onClickUpcoming={() => this.navigate("/upcoming")}
      />
    );
  }
}

export default withRouter(Menu);
