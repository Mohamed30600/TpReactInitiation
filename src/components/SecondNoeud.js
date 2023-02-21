import React, { Component } from "react";
import dataPersonne from "./dataPersonne";
import AjoutPersonne from "./AjoutPersonne";
import ModifPersonne from "./ModifPersonne";

class SecondNoeud extends Component {
  constructor() {
    super();
    this.dataPersonne = [...dataPersonne];
    this.state = { dataPersonne: this.dataPersonne };
  }

  ajoutPersonne = (personne) => {
    this.dataPersonne.push(personne);
    this.setState({ dataPersonne: this.dataPersonne });
  };

  supPersonne = (id) => {
    this.dataPersonne.filter((per) =>console.log(per.id !=id) );
    this.setState({dataPersonne:this.dataPersonne})
  };


  listePersonne = () =>
  
    this.state.dataPersonne.map((per, index) => (
      <tr key={per.id}>
        <th>{per.id}</th>
        <td>{per.nom}</td>
        <td>{per.prenom}</td>
        <td>{per.adress}</td>
        <td>{per.CodePostal}</td>
        <td>{per.age}</td>
        <td>
         <button className="btn btn-danger" onClick={this.supPersonne}>suprimer</button>
          
            
           </td>
      </tr>
      
    )
    
    );

  render() {
    return (
      <>
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
          <tbody>{this.listePersonne()}</tbody>
        </table>
        <hr />
        <div>
          <AjoutPersonne ajout={this.ajoutPersonne} />
        </div>
        <hr />
      </>
    );
  }
}

export default SecondNoeud;
