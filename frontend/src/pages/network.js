import {React, useS} from 'react';
import { Link } from 'react-router-dom';
import prod1 from '../assets/product-4.png';
import prod2 from '../assets/product-5.png';
import bees from '../assets/bees.png';


const PlantifyNetwork = () => {
    return(
        <div className='flex items-center justify-center'>
            <img src={bees}></img>
        </div>
    );
}

export default PlantifyNetwork;