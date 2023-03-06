import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AjouterpersonneRoute from "./AjouterpersonneRoute";

export default function ListPersonn() {
  const [personne, setPersonne] = useState([]);
  const [listepersonne, setListepersonne] = useState([]);

  const navigate =useNavigate()

  const afficheListe = () => {
    axios
      .get("http://localhost:3000/list")
      .then((reponse) => setPersonne(reponse.data)
      .then(()=>navigate("/")));
  };

  useEffect(() => {
    afficheListe();
  }, []);

  const deletePersonne = (id) => {
    axios.delete(`http://localhost:3000/list/${id}`)
    .then((res)=>afficheListe())
  };
 
  // const updatePers =(personne) => {
  //   axios.put(`http://localhost:3000/list/${personne.id}`,

  //   personne.id !== 

  //   )
  //   .then((res)=>console.log())
  // }
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
          {personne.map((valeur) => (
            <tr key={valeur.id}>
              <th scope="row">{valeur.id}</th>
              <td>{valeur.nom}</td>
              <td>{valeur.prenom}</td>
              <td>{valeur.adresse}</td>
              <td>{valeur.codePostal}</td>
              <td>{valeur.ville}</td>
              <td>{valeur.age}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deletePersonne(valeur.id);
                  }}
                >
                  delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    navigate(('/modifierPersonne'),{state:valeur})
                   ;
                  }}
                >
                  modif
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      --------------------------------------------------------------------------------------------

    </div>
  );
}
