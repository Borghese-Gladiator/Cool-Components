import React from 'react';
import { Link } from "gatsby";
import MyFab from '../components/MyFab';
import NetflixIntroAnimation from '../components/NetflixIntroAnimation';
  
const CreditCardPage = () => {
    return (
        <div>
            <Link to="/">
                <MyFab />
            </Link>
            <NetflixIntroAnimation />
        </div>
    )
};

export default CreditCardPage;