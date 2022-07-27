// import { useState } from 'react';
import { Button } from './components/Button';
import Nombres from './data/Nombres.json';

export const Analizador = () => {

  return (
    <> 
      <h2>Analizador de Créditos</h2>
      
      <div className='links'>
        {
            Nombres.map( data => (
                <Button { ...data } key={data.link} />
            ))
        }
      </div>
    </>
  )
}
