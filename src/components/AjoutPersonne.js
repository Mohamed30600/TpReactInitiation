import React, { Component } from "react";
import Personne from "../classes/Personn";

class AjoutPersonne extends Component {
  constructor(props) {
    super(props);
    this.state = { personne: new Personne() };
  }

  submit = (e) => {
    e.preventDefault(false); //Empêche le navigateur de faire un submit avec un download
    /**
        if(this.props.listeDeContacts) {
            this.props.listeDeContacts.push(this.state.contact)
        }
        */
    console.log(this.state.personne);
    if (this.props.ajout) {
      this.props.ajout({ ...this.state.personne });
      //callback avec copie pour éviter le passage de la même ref
    }
  };

  changeNom = (e) => {
    let lpersonne = this.state.personne;
    lpersonne.nom = e.target.value;
    this.setState({ personne: lpersonne });
  };

  changePrenom = (e) => {
    let lpersonne = this.state.personne;
    lpersonne.prenom = e.target.value;
    this.setState({ personne: lpersonne });
  };

  changeAdress = (e) => {
    let lpersonne = this.state.personne;
    lpersonne.adress = e.target.value;
    this.setState({ personne: lpersonne });
  };
  
  changeCodePostale = (e) => {
    let lpersonne = this.state.personne
    lpersonne.CodePostal = e.target.value
    this.setState({personne: lpersonne})
    }
    
    changeAge= (e) => {
        let lpersonne = this.state.personne
        lpersonne.age = e.target.value
        this.setState({personne: lpersonne})
        }

  render() {
    return (
        <form onSubmit={this.submit} >
      <div className="form-group">
          <label for="id">Saisie de l'Id de la Personne</label>
          <input
            type="number"
            required
            value={this.state.personne.id}
            onChange={(e) => {
              let lpersonne = this.state.personne;
              lpersonne.id = e.target.value;
              this.setState({ personne: lpersonne });
            }}
            id="id"
            placeholder="Saisie de l'id obligatoire"
          />
          <label for="nom">Saisie du nom de la personne</label>
          <input
            type="text"
            required
            value={this.state.personne.nom}
            onChange={this.changeNom}
            id="nom"
            placeholder="Saisie du nom obligatoire"
          />
          <label for="prenom">Saisie du prénom de la personne</label>
          <input
            type="text"
            required
            value={this.state.personne.prenom}
            onChange={(e) => {
              let lpersonne = this.state.personne;
              lpersonne.prenom = e.target.value;
              this.setState({ personne: lpersonne });
            }}
            id="prenom"
            placeholder="Saisie du prénom obligatoire"
          />
              <label for="adresse">Saisie l'adresse de la personne</label>
          <input
            type="text"
            required
            value={this.state.personne.adress}
            onChange={this.changeAdress}
            id="adress"
            placeholder="Saisie l'adresse obligatoire"
          />
              <label for="codePostale">Saisie du code postale de la personne</label>
          <input
            type="text"
            required
            value={this.state.personne.CodePostal}
            onChange={this.changeCodePostale}
            id="codePostale"
            placeholder="Saisie codePostale obligatoire"
          />
                <label for="age">Saisie du code postale de la personne</label>
          <input
            type="text"
            required
            value={this.state.personne.age}
            onChange={this.changeAge}
            id="age"
            placeholder="Saisie age obligatoire"
          />
        
          <input type="submit" value="Ok" />
      </div>
        </form>
    );
  }
}

export default AjoutPersonne;
