// import { useState } from 'react';
import { Button } from './components/Button';
import Nombres from './data/Nombres.json';

export const Analizador = () => {

  return (
    <> 
      <h1 className='h1 text-center mt-4'>Analizador de Créditos</h1>
      
      <div className='d-flex vh-80 flex-column justify-content-evenly align-items-center'>
        {
            Nombres.map( data => (
                <Button { ...data } key={data.link} />
            ))
        }
      </div>
    </>
  )
}
