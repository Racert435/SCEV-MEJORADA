import React, { useState, useEffect } from 'react';
import logoauto from './img/pngwing.com.png'

import { isEmpty, size } from 'lodash';
import { addDocument, deleteDocument, getColecction, updateDocument } from '../actions';




function Page(){
 
  const [task, setTask ] = useState("")
  const [task1, setTask1 ] = useState("")
  const [nombre,setNombre]=useState("")
  const [año,setAño]=useState("")
  const [placasA,setPlacasA]=useState("")
  const [placasB,setPlacasB]=useState("")
  const [fecha,setFecha]=useState("")
  const [inicio,setInicio]=useState("")
  const [salida,setSalida]=useState("")
  const [tasks, setTasks]=useState([])
  const [editMode,setEditMode]=useState(false)
  const[id,setId]=useState("")

  const [error,setError]=useState(null)


  useEffect(()=>{
    (async()=>{
      const result = await getColecction("tasks")
      console.log(result)
      if(result.statusResponse){
        setTasks(result.data)
      }
    }) ()
  },[])

  
  const addTask=async(e)=>{
    e.preventDefault()
    if(isEmpty(task)){
      console.log("Task Vacio")
      return
    }
    const result=await addDocument("tasks",{Correo: task,Nombre:nombre, MarcaVehiculo: task1,Año:año,PlacasA:placasA,PlacasB:placasB,Fecha:fecha,Inicio:inicio,Salida:salida})
    if(!result.statusResponse){
      setError(result.error)
      return
    }

    setTasks([...tasks, {id:result.data.id, Correo:task,Nombre:nombre,MarcaVehiculo:task1,Año:año,PlacasA:placasA,PlacasB:placasB,Fecha:fecha,Inicio:inicio,Salida:salida}])
    setTask("")
    setTask1("")
    setNombre("")
    setAño("")
    setPlacasA("")
    setPlacasB("")
    setFecha("")
    setInicio("")
    setSalida("")
    setId("")

  }

  const saveTask=async(e)=>{
    e.preventDefault()
    if(isEmpty(task)){
      console.log("Task Vacio")
      return
    }
    const result=await updateDocument("tasks",id, {Correo:task,Nombre:nombre,MarcaVehiculo:task1,Año:año,PlacasA:placasA,PlacasB:placasB,Fecha:fecha,Inicio:inicio,Salida:salida})
    if(!result.statusResponse){
      setError(result.error)
      return
    }

    const editedTasks=tasks.map(item => item.id === id ? {id, Correo:task,Nombre:nombre,MarcaVehiculo:task1,Año:año,PlacasA:placasA,PlacasB:placasB,Fecha:fecha,Inicio:inicio,Salida:salida}:item)
    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setTask1("")
    setNombre("")
    setAño("")
    setPlacasA("")
    setPlacasB("")
    setFecha("")
    setInicio("")
    setSalida("")
    setId("")
  }

  const deleteTask=async(id)=>{
    const result=await deleteDocument("tasks",id)
    if(!result.statusResponse){
      setError(result.error)
      return
    }
    const filteredTasks=tasks.filter(task=>task.id !==id)
    setTasks(filteredTasks)

  }
  const editTask=(tarea)=>{
    
      setTask(tarea.Correo)
      setNombre(tarea.Nombre)
      setTask1(tarea.MarcaVehiculo)
      
      setAño(tarea.Año)
      setPlacasA(tarea.PlacasA)
      setPlacasB(tarea.PlacasB)
      setFecha(tarea.Fecha)
      setInicio(tarea.Inicio)
      setSalida(tarea.Salida)
      setEditMode(true)
      setId(tarea.id)
    
    
    
  }




  return(
    <>


    
    <link rel="stylesheet" href="./style.css"/>
    <div className="container mt-5">
        <h1 className="text-center" >Tabla de registros <img id="logoauto" src={logoauto} alt="auto"/></h1>
        
        <div >
           
          
           
          </div>
        <hr/>
        
        <hr/>
        </div>
        <div >
          <div >
            <h4 className="text-center">Estacionamiento</h4>
            {
              size(tasks)===0 ?(
                <h5 className="text-center">Aun no hay espacios ocupados</h5>
              ):(
                <ul className="list-group">
                  {tasks.map((task)=>(
                    <li className="list-group-item" key={task.id}>

<div className="container table-responsive">
<table class="table  table-hover table-bordered table-primary">
  
  <thead>
    
    <tr>
      <th scope="col">Marca Y Modelo</th>
      <th scope="col">Fecha</th>
      <th scope="col">Entrada</th>
      <th scope="col">Salida</th>
      
    </tr>
   
  </thead>
  <tbody>
    <tr>
      <th scope="row">{task.MarcaVehiculo}
      </th>
      
      
      <td>{task.Fecha}</td>
      <td>{task.Inicio}</td>
      <td>{task.Salida}</td>
     
      
    </tr>
   
  </tbody>


 
</table>

</div>

    
</li>

                  ))}
                </ul>
              )
            }
            
          </div>

          <hr/>
        
        <hr/>
        </div>
 

           
                     
                      
                      
                     
               
       
    

    
</>


  )

}

export default Page;