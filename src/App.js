import { useState } from 'react';
import Navbar from './pages/navbar';
import "/node_modules/bootswatch/dist/lux/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Panier from './pages/Panier';

function App() { 

  return (
   
  
     
   <div> 
    <Navbar />

    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
         <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/blog" element={<Blog />} />
        
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/login" element={<Login />} />

            <Route path="/connexion" element={<Inscription/>} />
        
            <Route path="/panier" element={<Panier/>} />

         </Routes>


        </div>
      </div>
    </div>

</div>
);
}

export default App;
