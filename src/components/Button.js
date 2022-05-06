import PropTypes from "prop-types";
import { Component } from "react";

const Button = ({ color, text, onClick }) => {

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

// class App extends Component {
//   render() {
//     return {
//       <div className="App">
      
//     }
//   }
// }
