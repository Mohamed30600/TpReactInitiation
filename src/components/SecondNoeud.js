import React, { Component } from 'react';
import dataPersonne from './dataPersonne';

class SecondNoeud extends Component {
    render(props) {
        return (
            <div>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">NOm</th>
      <th scope="col">Prenom</th>
      <th scope="col">Adresse</th>
      <th scope="col">CodePostale</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
    {dataPersonne.map((pers,i)=>(
        <>
         <tr>
      <th >{pers.id}</th>
      <td>{pers.nom}</td>
      <td>{pers.prenom}</td>
      <td>{pers.adress}</td>
      <td>{pers.CodePostal}</td>
      <td>{pers.age}</td>
    </tr>
        </>
    ))}
   
    </tbody>
</table>
            </div>
        );
    }
}

export default SecondNoeud;
