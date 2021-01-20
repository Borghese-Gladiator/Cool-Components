import React from 'react';
import { Link } from "gatsby";
import MyFab from '../components/MyFab';
import WebkitLineClamp from '../components/WebkitLineClamp';
  
const CreditCardPage = () => {
    return (
        <div>
            <Link to="/">
                <MyFab />
            </Link>
            <WebkitLineClamp />
        </div>
    )
};

export default CreditCardPage;