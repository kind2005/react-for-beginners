import PropTypes from "prop-types";
import btnStyles from "./Button.module.css";

function Button({ text, test }){
    return <button className={btnStyles.btn}>{text} {test}</button>;
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    test : PropTypes.number,
};

export default Button;