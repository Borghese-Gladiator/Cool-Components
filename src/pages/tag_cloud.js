import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/_layout/Layout';
import MyFab from '../components/MyFab';
import TagCloud from '../components/TagCloud';
  
const CreditCardPage = () => {
    return (
        <Layout>
            <Link to="/">
                <MyFab />
            </Link>
            <h4>My Changes</h4>
            <ul>
                <li>Fixed attributes to camelCase (eg: class)</li>
            </ul>
            <br />
            <TagCloud />
        </Layout>
    )
};

export default CreditCardPage;