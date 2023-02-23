import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { update } from "immutable";

const ModifierPersonne = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodepostal] = useState("");
  const [ville, setVille] = useState("");
  const [age, setAge] = useState("");
  const [personne, setPersonne] = useState([]);
  const [listepersonne, setListepersonne] = useState([]);

  const updatePersonne = (id) => {
    
    axios
      .put(`http://localhost:3000/list/${id}`,
       { id:id,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
        codePostal: codePostal,
        ville: ville,
        age: age,
      })
      .then((resp) =>{setPersonne(listepersonne.map((valeur)=>{
        return valeur.id == id ?
        {id:valeur.id,
          nom: valeur.nom,
          prenom: valeur.prenom,
          adresse: valeur.adresse,
          codePostal: valeur.codePostal,
          ville: valeur.ville,
          age: valeur.age,
        }:valeur
      }))

      }
        
      );
  };
  return (
    <form>
    <div className="form-group">
    <label >id:</label>
<input type ="text" name="id" onChange={(e)=>{setNom(e.target.value)}}/>     
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
<button className='btn btn-success' onClick={()=>{update(id)}}>valider</button>
</div>
<h1>valider</h1>
  </form>
  );
};

export default ModifierPersonne;
