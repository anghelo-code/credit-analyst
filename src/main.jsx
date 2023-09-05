import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter,Routes, Route } from 'react-router-dom';
import { Analizador } from './Analizador';
import { MethodPage } from './components/MethodPage';
import englishAnalyst from './helpers/englishAnalyst';
import flatAnalyst from './helpers/flatAnalyzer';
import frenchAnalyst from './helpers/frenchAnalyst';
import germanAnalyzer from './helpers/germanAnalyzer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route path=''  element={ <Analizador/>}/>

          <Route 
            path='/MetodoFrances'  
            element={ 
              <MethodPage  
                processor={ frenchAnalyst } 
                title="Metodo de Análisis Francés"
              />
            }
            title="Metodo de Análisis Francés"
          />

          <Route 
            path='/MetodoAleman'  
            element={ 
              <MethodPage  
                processor={ germanAnalyzer }
                title="Metodo de Análisis Alemán"
              />
            }
            title="Metodo de Análisis Alemán"
          />

          <Route 
            path='/MetodoIngles'  
            element={ 
              <MethodPage  
                processor={ englishAnalyst }
                title="Metodo de Análisis Inglés" 
              />
            }
            title="Metodo de Análisis Inglés" 
          />
          <Route 
            path='/MetodoFlat'  
            element={ 
              <MethodPage  
                processor={ flatAnalyst }
                title="Metodo de Análisis Flat"
              />
            }
            title="Metodo de Análisis Flat"
          />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
