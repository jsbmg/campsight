import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

// import AvailabilityView from './AvailabilityView';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-between py-4 px-8 bg-blue-300">
        <div className="text-3xl font-bold cursor-pointer">CampFynd</div>
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
