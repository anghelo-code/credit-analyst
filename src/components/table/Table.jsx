import { TableBody } from "./TableBody";
import { TableThead } from "./TableThead";
import PropTypes from "prop-types";

export const Table = ({ result }) => {
  return (
    <div className="row table-div">
      <div className="col-md-12">
          <table className="table table-bordered">

              <TableThead/>
              <TableBody result={ result }/>      
          
          </table>
      </div>
    </div>
  )
}

Table.propTypes = {
  result: PropTypes.array.isRequired
}
