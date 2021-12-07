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
        <h1 className="text-center" >Registro de Automoviles <img id="logoauto" src={logoauto} alt="auto"/></h1>
        
        <div >
            <h4 className="text-center">{editMode ? "Modificar registro" : "Nuevo Auto-Park"} </h4>
            <hr/>
            <form onSubmit={editMode ? saveTask:addTask}>
              <input type="text" className="form-control mb-2" placeholder="Correo" onChange={(text)=>setTask(text.target.value)} value={task}/>
              <input type="text" className="form-control mb-2" placeholder="Nombre" onChange={(text)=>setNombre(text.target.value)} value={nombre}/>
              <input type="text" className="form-control mb-2" placeholder="Marca Y Modelo" onChange={(text)=>setTask1(text.target.value)} value={task1}/>
              
              <input type="text" className="form-control mb-2" placeholder="Año del vehiculo" onChange={(text)=>setAño(text.target.value)} value={año}/>
              <input type="text" className="form-control mb-2" placeholder="Placas A del vehiculo " onChange={(text)=>setPlacasA(text.target.value)} value={placasA}/>
              <input type="text" className="form-control mb-2" placeholder="Placas B del vehiculo" onChange={(text)=>setPlacasB(text.target.value)} value={placasB}/>
              <h6 className="text-center">Selecciona la fecha actual:</h6>
              <input type="date" className="form-control mb-2" onChange={(date)=>setFecha(date.target.value)} value={fecha}/>
              <h6 className="text-center">Selecciona tu hora de entrada:</h6>
              <input type="time" className="form-control mb-2" onChange={(time)=>setInicio(time.target.value)} value={inicio} />
              <h6 className="text-center">Selecciona tu hora de salida:</h6>
              <input type="time" className="form-control mb-2" onChange={(time)=>setSalida(time.target.value)} value={salida} />
              <button className={editMode ? "btn-fluid btn-warning btn-block" : "btn-fluid btn-dark btn-block"} type="submit">{editMode ? "Actualizar":"Registrar"} </button>
            </form>
          </div>
        <hr/>
        
        <hr/>
        </div>
        <div >
          <div >
            <h4 className="text-center">Informacion de usuario</h4>
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
<div className="container-md">
  <button className="btn btn-warning btn-sm " onClick={()=>editTask(task)}>Actualizar</button>
  <button className="btn btn-danger btn-sm  mx-2 " onClick={()=>deleteTask(task.id)}>Eliminar</button>
  </div>
</div>

    
</li>

                  ))}
                </ul>
              )
            }
            
          </div>

          
        </div>
 

           
                     
                      
                      
                     
               
       
    

    
</>


  )

}

export default Page;