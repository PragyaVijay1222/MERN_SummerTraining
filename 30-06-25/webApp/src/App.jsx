// import { PersonContext } from './context/PersonContext'
// import { PersonProvider } from './provider/PersonProvider'
// import { Component1 } from './components/Component1'
// import Timer from './components/Timer'

import './App.css';
import Header from './components/Header';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />

      {/* <PersonProvider>
        <Component1 />
      </PersonProvider>

      <Timer /> */}

      <Routes>
         <Route path="/Women" element = {<Women />}/>
         <Route path="/Men" element = {<Men />}/>
         <Route path="/Kids" element = {<Kids />}/>
         <Route path="/Home" element = {<Home />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
