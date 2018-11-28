import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

let testPerson = {
  name: "Hazza Potter",
  numberOrName: "Hogwarts",
  street: "Grindlewald Place",
  town: "Hogsmead",
  country: "Scotland",
  postcode: "SP3 LL"
};

function Address({ person }) {
  return (
    <div className="address">
      <div className="name">{person.name}</div>
      <div className="line1">{person.numberOrName}</div>
      <div className="street">{person.street}</div>
      <div className="town">{person.town}</div>
      <span className="country">{person.country}, </span>
      <span className="postcode">{person.postcode}</span>
    </div>
  );
}

Address.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    numberOrName: PropTypes.string,
    strett: PropTypes.string,
    town: PropTypes.string,
    country: PropTypes.string,
    postcode: PropTypes.string
  }).isRequired
};

ReactDOM.render(
  <Address person={testPerson} />,
  document.getElementById("root")
);
