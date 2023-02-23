import React from 'react'
import axios from 'axios'
import { useState,useEffect } from "react";

export default function ListPersonn() {
  const [personne, setPersonne] = useState([]);
  const [listepersonne, setListepersonne] = useState([]);
 const [nom, setNom] = useState("");
 const [prenom, setPrenom] = useState("");
 const [adresse, setAdresse] = useState("");
 const [codePostal, setCodepostal] = useState("");
 const [ville, setVille] = useState("");
 const [age, setAge] = useState("");
  
 
  const afficheListe =()=>{
    axios.get("http://localhost:3000/list")
      .then((reponse)=> setPersonne(reponse.data))
  }

  const ajouterpersonne = ()=>{
    axios.post("http://localhost:3000/list",{
      nom:nom,
      prenom:prenom,
      adresse:adresse,
      codePostal:codePostal,
      ville:ville,
      age:age
    }).then(()=>setListepersonne(...ListPersonn ,{
      nom:nom,
      prenom:prenom,
      adresse:adresse,
      codePostal:codePostal,
      ville:ville,
      age:age
    }) )
  }

  useEffect(() => {
    afficheListe()
 
  }, [ListPersonn]);

  const deletePersonne =(id)=>{
    axios.delete(`http://localhost:3000/list/${id}`)
  }


  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">idii</th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Adresse</th>
      <th scope="col">CodePostale</th>
      <th scope="col">ville</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
   {personne.map((valeur)=>(
    <tr key={valeur.id}>
    <th scope="row">{valeur.id}</th>
    <td>{valeur.nom}</td>
    <td>{valeur.prenom}</td>
    <td>{valeur.adresse}</td>
    <td>{valeur.codePostal}</td>
    <td>{valeur.ville}</td>
    <td>{valeur.age}</td>
    <td>
    <button className='btn btn-danger' onClick={()=>{deletePersonne(valeur.id)}}>delete</button>
    </td>
  </tr>

   ))}
    
    </tbody>
</table>
--------------------------------------------------------------------------------------------
<div className="form">
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
 <button onClick={ajouterpersonne} >Ajouter personne</button>
 
</div>
    </div>
  )
}


