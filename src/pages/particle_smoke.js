import React from 'react';
import { Link } from "gatsby";
import MyFab from '../components/MyFab';
import ParticleSmoke from '../components/ParticleSmoke';
  
const CreditCardPage = () => {
    return (
        <div>
            <Link to="/">
                <MyFab />
            </Link>
            <ParticleSmoke />
        </div>
    )
};

export default CreditCardPage;