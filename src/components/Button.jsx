import { Link } from 'react-router-dom';

export const Button = ({link, title}) => {
  return (
    <Link to={ link } className='button'>
        <h4> { title } </h4>
    </Link>
  )
}
