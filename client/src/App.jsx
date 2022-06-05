import React from 'react';
import './index.css';
import {FaBinoculars} from 'react-icons/fa';

// import AvailabilityView from './AvailabilityView';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-between py-4 px-8 bg-green-700 text-gray-50">
        <div className="text-3xl font-bold cursor-pointer flex flex-row gap-4">
          <FaBinoculars />
          CampEyez
        </div>
        <div className="flex gap-8">
          <div className="m-auto cursor-pointer">Signup</div>
          <div className="align-middle m-auto cursor-pointer">Login</div>
        </div>
      </div>
      <hr></hr>
      <Form />
    </div>
  )
}

export default App
