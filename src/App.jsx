
import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'

function App() {

  let [category, setCategory] = useState("technology");
  

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <Home category={category} setCategory={setCategory}/>
    </>
  )
}

export default App
