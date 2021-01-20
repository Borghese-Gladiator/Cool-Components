import React from 'react';
import { Link } from "gatsby";
import MyFab from '../components/MyFab';
import TagCloud from '../components/TagCloud';
  
const CreditCardPage = () => {
    return (
        <div>
            <Link to="/">
                <MyFab />
            </Link>
            <TagCloud />
        </div>
    )
};

export default CreditCardPage;