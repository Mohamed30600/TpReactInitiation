import React, { Component } from 'react';

class Personne extends Component {
    dataPersonne  = [

        {id:1,
            nom:"mohamed",
            prenom:"hamidi",
            adress:"rue des amendier",
            CodePostal:"34000",
            age:28
        },
        {id:1,
            nom:"pierre",
            prenom:"durand",
            adress:"rue des oliver",
            CodePostal:"75000",
            age:58
        },
        {id:1,
            nom:"julie",
            prenom:"duprey",
            adress:"ravenur  des feneitre",
            CodePostal:"92000",
            age:20
        }
    ]
     
    constructor() {
         super()
         this.id = 0
        this.nom=""
        this.prenom=""
        this.adresse=""
        this.CodePostal=""
        this.age=18
    }
         
    render() {
        return (
            <div>
                <li>{this.id}</li>
                <li>{this.nom}</li>
                <li>{this.prenom}</li>
                <li>{this.adresse}</li>
                <li>{this.CodePostal}</li>
                <li>{this.age}</li>
            </div>
        );
    }
}

export default Personne;
