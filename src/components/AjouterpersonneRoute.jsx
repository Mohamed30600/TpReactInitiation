import React from 'react';
import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AjouterpersonneRoute = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodepostal] = useState("");
    const [ville, setVille] = useState("");
    const [age, setAge] = useState("");
    const [personne, setPersonne] = useState([]);
    const [listepersonne, setListepersonne] = useState([])
    const navigate = useNavigate ();

    const pers = {
      nom,prenom,adresse,codePostal,ville,age
    }

const ajouterpersonne = ()=>{
    axios.post("http://localhost:3000/list",
      pers
    )
    .then(()=>navigate('/') )
    
  }

  const updatePersonne =(pers)=>{
    axios.put(`http://localhost:3000/list/${pers.id}`,
     pers
    )
    .then((res)=>console.log(res))
  }

   
    return (
        <form>
          <div className="form-group">
  <label >Nom:</label>
  <input type ="text" name="nom" onChange={(e)=>{setNom(e.target.value)}}/>
  <label >Prenom:</label>
  <input type ="text" name="prenom" onChange={(e)=>{setPrenom(e.target.value)}}/>
  <label >adresse:</label>
  <input type ="text" name="adresse" onChange={(e)=>{setAdresse(e.target.value)}}/>
  <label >CodePostale:</label>
  <input type ="text" name="codePostal" onChange={(e)=>{setCodepostal(e.target.value)}}/>
  <label >ville:</label>
  <input type ="text" name="ville" onChange={(e)=>{setVille(e.target.value)}}/>
  <label >Age:</label>
  <input type ="number" name="age" onChange={(e)=>{setAge(e.target.value)}}/>
 <button className='btn btn-success' onClick={()=>{ajouterpersonne()}}>valider</button>
</div>
<h1>ajouter personne</h1>
        </form>
    );
};

export default AjouterpersonneRoute;