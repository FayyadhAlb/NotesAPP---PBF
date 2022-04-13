import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from "./screens/Home";
import Notes from "./screens/Notes";
import Create from "./screens/Create";

function App() {
  const [notes,setNotes] = useState([])
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/note" element={<Notes notes={notes} setNotes={setNotes}/>} />
        <Route path="/create" element={<Create setNotes={setNotes}/>} />
      </Routes>
    </div>
  );
}

export default App;
