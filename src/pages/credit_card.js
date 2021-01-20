import React from 'react';
import { Link } from "gatsby";
import MyFab from '../components/MyFab';
import GlassCreditCard from '../components/GlassCreditCard';
  
const CreditCardPage = () => {
    return (
        <div>
            <Link to="/">
                <MyFab />
            </Link>
            <GlassCreditCard />
        </div>
    )
};

export default CreditCardPage;