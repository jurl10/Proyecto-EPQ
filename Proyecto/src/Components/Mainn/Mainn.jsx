import React, { Children } from 'react'
import './Mainn.css'

export const Mainn = ({children}) => {
  return (
    <div className='contenedor-padre'>
    {children}
    </div>
  )
}
