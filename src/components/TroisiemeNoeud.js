import React from 'react';
import {format} from 'date-fns'
import fr from 'date-fns/locale/fr';

const TroisiemeNoeud = () => {
    return (
        <div>
            {format ( new Date(), 'd MMMM Y HH:mm:ss',{locale:fr})}
        </div>
    );
};

export default TroisiemeNoeud;