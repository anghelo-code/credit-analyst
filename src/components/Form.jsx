import { useState } from "react";
import PropTypes from "prop-types";

export const Form = ({ onNewData }) => {

  const [form, setForm] = useState({ 'interes': 5});

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewData(form);
    e.target.reset();
    setForm({ 'interes': 5})  
  }

  return (

    <form onSubmit={ handleSubmit } aria-label='form' className="row g-3 align-items-center my-4">
      <div className="col-auto">
        <label htmlFor="prestamo" className="form-label">Préstamo inicial:</label>
      </div>

      <div className="col-auto">
        <input 
          type='number' 
          className='form-control'
          data-testid="prestamo" 
          name='prestamo' 
          min="1000" 
          max="100000" 
          defaultValue={1000}
          onChange={handleChange}
        />
      </div>
      
      <div className="col-auto">
        <label htmlFor="interes" className="form-label">Interés: </label>
      </div>

      <div className="col-auto">
        <input 
          type='number' 
          className='form-control'
          data-testid='interes' 
          name='interes'  
          min="0" 
          max="20"  
          onChange={handleChange}
        />
      </div>
      
      <div className="col-auto">
        <label htmlFor="periodo" className="form-label">Número de periodos:</label>
      </div>

      <div className="col-auto">
        <input 
          type='number' 
          className='form-control'
          data-testid='periodo' 
          name='periodo' 
          min="3" 
          max="36" 
          onChange={handleChange}
        />
      </div>
      
      <div className="col-auto">
        <input type="submit" className="btn btn-primary" />
      </div>
      

    </form>
  )
}

Form.propTypes = {
  onNewData: PropTypes.func.isRequired
};