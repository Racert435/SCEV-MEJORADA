import React from 'react'
import { NavLink } from 'react-router-dom'


const navigation = () => {
    return (
       
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
            <img id="logo" src="./img/lOGOSCEV.jpg" alt="adf"/> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
        <NavLink to="/" className="btn btn-outline-danger">Principal</NavLink> 
      
          </li>
        
          <li class="nav-item">
   
    
   <NavLink to="/quien/" className="btn btn-outline-primary">Quienes somos?</NavLink>
   <NavLink to="/formulario/" className="btn btn-outline-success">Registro de Automoviles</NavLink> 
   <NavLink to="/tabla/" className="btn btn-outline-success">Tabla de registro</NavLink> 
     </li>
         
          
          </ul>
                
                
            </div>
            </div>
            
        </nav>
        



       
        
    )
    
}

export default navigation
