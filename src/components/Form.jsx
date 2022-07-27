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

    <form onSubmit={ handleSubmit } aria-label='form'>
      <label htmlFor="prestamo">Préstamo inicial:</label>
      <input 
        type='number' 
        data-testid="prestamo" 
        name='prestamo' 
        min="1000" 
        max="100000" 
        defaultValue={5}
        onChange={handleChange}
      />

      <label htmlFor="interes">Interés: </label>
      <input 
        type='number' 
        data-testid='interes' 
        name='interes'  
        min="0" 
        max="20"  
        onChange={handleChange}
      />

      <label htmlFor="periodo">Número de periodos:</label>
      <input 
        type='number' 
        data-testid='periodo' 
        name='periodo' 
        min="3" 
        max="36" 
        onChange={handleChange}
      />

      <input type="submit" />

    </form>
  )
}

Form.propTypes = {
  onNewData: PropTypes.func.isRequired
};