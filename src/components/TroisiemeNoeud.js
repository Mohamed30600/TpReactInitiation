import React from 'react';
import {format} from 'date-fns'

const TroisiemeNoeud = () => {
    return (
        <div>
            {format ( new Date(), 'do MMMM Y HH:mm:ss')}
        </div>
    );
};

export default TroisiemeNoeud;