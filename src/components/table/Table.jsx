import { TableBody } from "./TableBody"
import { TableThead } from "./TableThead"

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
