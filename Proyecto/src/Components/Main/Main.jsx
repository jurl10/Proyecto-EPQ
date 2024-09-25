import React from 'react'
import './Main.css'
export const Main = () => {
  return (
    <>
    <div className='cuadro'>
    <h1 className='titulo'>Municipios</h1>
    <select className='brd'>
    <option value="">Ingrese el Municipio</option>    
    <option value="hola1">Cordoba</option>
    <option value="hola2">Armenia</option>
   </select>
   <input className='btn' type="button" value="CONFIRMAR" onClick={() => alert("Municipio verificado")}  /> </div>

   <div className='cuadroDos'>
   <h1 className='titulo'>Codigos</h1>
    <input type="text" name="" id=""placeholder='Ingrese el codigo' />
   <input className='btn' type="button" value="CONFIRMAR" onClick={() => alert("Codigo verificado")}  /> 

   </div>
  
   
   
   </>
  )
}
