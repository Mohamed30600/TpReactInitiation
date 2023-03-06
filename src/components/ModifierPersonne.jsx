import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { update } from "immutable";
import { useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const ModifierPersonne = () => {
  const navigate = useNavigate()
  const per=useLocation()
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodepostal] = useState("");
  const [ville, setVille] = useState("");
  const [age, setAge] = useState("");
  const [personne, setPersonne] = useState([]);
  const [listepersonne, setListepersonne] = useState([]);
  
  
  const updatePersonne = (personne) => {
    
    axios
      .put(`http://localhost:3000/list/${personne.id}`,personne
      )
      .then((resp)=> navigate('/'))

      }
           
  
  return (
    <form>
    <div className="form-group">
    <label >id:</label>
<input type ="text" name="id"  placeholder={nom} onChange={(e)=>{setNom(e.target.value)}}/>     
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
<button className='btn btn-success' onClick={()=>{updatePersonne(per.state)}}>valider</button>
</div>
<h1>valider</h1>
  </form>
  );
};

export default ModifierPersonne;
