import React from "react";
import paloma from '../paloma.png';

import dinero       from '../dinero.png'
import lupa       from '../lupa.png'
import acom from '../acompañamos.jpg'


    
const Page =()=>(
    <div>    
        <div class="container text-center ">
            <h1 className="text-center">Bienvenidos a SCEV</h1>        
            </div>     
        <div class="con text-center">
            <h2>¿Estás buscando estacionamiento para tu coche?</h2>
            <p> SCEV es la opción más cómoda, confiable y económica para conseguir un lugar para tu coche.</p>
</div>
         <div class="con2 text-center">
            <h2>¿Cómo funciona SCEV? </h2>
                <h5>Un estacionamiento diferente:</h5>
                </div>
            
            <div class="caja text-center">
            <div><img id="paloma" src={paloma} class="img4" alt="..."/></div>
            <p>Privado y exclusivo a nuestra comunidad con SCEV tienes acceso a múltiples opciones de estacionamiento. Hacemos esfuerzos por conseguir alternativas que no encontrarías en la calle o estacionamientos tradicionales.</p>
            </div>
           

            <div class="caja text-center">
            <div><img id="paloma"  src={paloma} class="img2"  alt="..."/> </div>
            <p>Cómodo, práctico y económico, ahorra tiempo, dinero y estrés reservando un lugar de estacionamiento privado con gente como tú con tan solo un click.</p>
            </div>
           
            <div class="con3 text-center">
            <h2>¿Qué hacemos por tí?</h2>
            </div>

            <div  class="caja text-center">
            <div><img class="img2" src={lupa}  alt="..."/> </div>
            <p>Te ayudamos a encontrar una opción de estacionamento que se ajuste a tus necesidades a un precio justo.</p>
            </div>
           

        
       

        <div class="caja text-center">
        <div>  <img class="img2" src={acom}  alt="..."/> </div>
            <p>Te acompañamos a lo largo de toda tu reservación y hacemos el cobro con la forma de pago que prefieras.</p>
        </div>
    

    
    <div class="con4 text-center">
        <h2>¿Cómo funciona?</h2>
        </div>
        
        <div class="caja text-center">
        <div>  <img class="img2" src={lupa}  alt="..."/> </div>
        <p>Explora las opciones
            y encuentra tu lugar ideal en el mapa.</p>
        </div>
        
    
    <div class="caja text-center">
    <div>  <img class="img2" src={acom}  alt="..."/> </div>
        <p>Selecciona la hora de inicio y de salida.</p>
    </div>

    

    <div class="con5 text-center">
        <h2>Otros beneficios</h2>

    </div>
    
    <div class="caja text-center ">
        <div>  <img class="img2" src={dinero}  alt="..."/> </div>
            <p>Te ahorramos tiempo, dinero y estrés.</p>
        </div>

        <div class="caja text-center">
    <div>  <img  class="img2" src={acom}  alt="..."/> </div>
        <p>Recibe en tu correo una confirmación de la reservación con todos los detalles.</p>
    </div>
    </div>
    
    
)
export default Page;