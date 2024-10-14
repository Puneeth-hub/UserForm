import { useState } from 'react'

import CreateForm  from './FormData/formData';
import DataDisplay from './DisplayData/displayData';
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <div className='left-side'>
      <CreateForm/>
      </div>
      <div className='right-side'>
       <DataDisplay/>
      </div>
    </div>
  )
}

export default App
