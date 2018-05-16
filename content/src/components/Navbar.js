import React from "react";
import { Link } from "react-router-dom";
import woodGrain2 from "../pictures/woodGrain2.jpg";
import tentIcon from "../pictures/tentIcon.png"

const navbarBackground = {
  backgroundImage: "url(" + woodGrain2 + ")",
  textAlign: "center"
}

const navbarBtn = {
  color: "white"
}

const tentStyle = {
  height: "60px"
}
class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={ navbarBackground }>
          <img src={tentIcon} alt="tentIcon" style={tentStyle} />
          <Link to="/home" className="btn btn-link" style={ navbarBtn }>
            Home
          </Link>
          <Link to="/contacts" className="btn btn-link" style={ navbarBtn }>
            Contacts
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
