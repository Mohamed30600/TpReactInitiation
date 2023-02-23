import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListPersonn() {
  const [personne, setPersonne] = useState([]);
  const [listepersonne, setListepersonne] = useState([]);

  

  const afficheListe = () => {
    axios
      .get("http://localhost:3000/list")
      .then((reponse) => setPersonne(reponse.data));
  };

  useEffect(() => {
    afficheListe();
  }, []);

  const deletePersonne = (id) => {
    axios.delete(`http://localhost:3000/list/${id}`)
    .then((res)=>afficheListe())
  };
 
  const updatePers =( id) => {
    axios.put(`http://localhost:3000/list/${id}`)
    .then((res)=>console.log())
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
                    updatePers(valeur.id);
                  }}
                >
                  delete
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
