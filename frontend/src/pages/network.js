import {React, useS} from 'react';
import { Link } from 'react-router-dom';
import bees from '../images/bees.png';


const PlantifyNetwork = () => {
    return(
        <div className='flex items-center justify-center'>
            <img src={bees}></img>
        </div>
    );
}

export default PlantifyNetwork;