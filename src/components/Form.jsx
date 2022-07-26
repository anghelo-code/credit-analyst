import { useState } from "react"

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
    e.target[1].value = 5;  
    setForm({ 'interes': 5})  
  }

  return (

    <form onSubmit={ handleSubmit }>
      <label htmlFor="prestamo">Préstamo inicial:</label>
      <input 
        type='number' 
        id="prestamo" 
        name='prestamo' 
        min="1000" 
        max="100000" 
        onChange={handleChange}
      />

      <label htmlFor="interes">Interés: </label>
      <input 
        type='number' 
        id='interes' 
        name='interes'  
        min="0" 
        max="20"  
        onChange={handleChange}
      />

      <label htmlFor="periodo">Número de periodos:</label>
      <input 
        type='number' 
        id='periodo' 
        name='periodo' 
        min="3" 
        max="36" 
        onChange={handleChange}
      />

      <input type="submit" />

    </form>
  )
}
