import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Button = ({link, title}) => {
  return (
    <Link to={ link } className='button'>
        <h4> { title } </h4>
    </Link>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired
}