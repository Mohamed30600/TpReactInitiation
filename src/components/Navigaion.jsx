import React from "react";
import { BrowserRouter, Link,Route,Routes } from "react-router-dom";
import ListPersonn from "./ListPersonn";
import AjouterpersonneRoute from "./AjouterpersonneRoute";
import ModifierPersonne from "./ModifierPersonne";

const Navigaion = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
            tpreact route
         
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
           
                  <Link to="/" >Liste personne</Link> 
              
              </li>
              <li className="nav-item">
              
                 <Link to ="/ajouterPersonne"> Ajouter Personne</Link>
              
              </li>
              
            </ul>
          </div>
        </nav>
        <Routes>
            <Route path="/" exact element={<ListPersonn/>}/>
            <Route path="/ajouterPersonne"  element={<AjouterpersonneRoute/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigaion;
