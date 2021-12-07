import React from "react";

import chat       from '../chat.png'
import cont       from '../cont.png'
import pagos       from '../pagos.png'
import vali       from '../vali.png'

const Page  =() =>(

   
    <div class="container-fluid">
         
    <div class="container  ">
         <div class="con text-center">
            <h2>Elige tu estacionamiento mas cercano:</h2>
            </div>
            <br/>
        
        <div class="con2 ">
        <h2 >Te cuidamos y garantizamos que tu dinero valga la pena</h2>
            <div class="caja">
            
               
                <img class="img2" src={cont}  alt="..."/>
                <p>Te brindamos atención personalizada durante tus reservaciones y garantizamos que el lugar cumpla sus condiciones.</p>
            </div>
            </div>
            <br/>
        <div class="con2">
        <div class="caja">
            <h2>Chat entre anfitrión y conductor</h2>
            
        <img class="img2" src={chat}  alt="..."/> 
            <p>Una vez que tu reservación está pagada y confirmada se habilita un sistema de mensajería con el anfitrión para que puedas escribirle en caso de una eventualidad.</p>
        </div>
        </div>
        <br/>
        

        <div class="con2">
        <h2> Validación de perfiles</h2>
            <div class="caja">
             
               
               <img class="img2" src={vali}  alt="..."/>
                <p>Solicitamos documentación y monitoreamos la reputación de los usuarios.</p>
                
            </div>
           
            </div>
            <br/>
        <div class="con2 text-center">
        <h2 > Pagos seguros y sin necesidad de efectivo</h2>
        <div class="caja  text-center">
        
           
           <img class="img2" src={pagos}  alt="..."/> 
            <p> Tu estacionamiento con tu tarjeta, no hay necesidad de usar efectivo ni entregar pagos al anfitrión.</p>
            
        </div>
        </div>
        </div>
        

    
    </div>
    )

export default Page;