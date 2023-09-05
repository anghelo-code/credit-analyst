import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Button = ({link, title}) => {
  return (
    <Link to={ link } className='btn btn-primary btn-lg rem-8'>
      { title } 
    </Link>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired
}