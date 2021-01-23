import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/_layout/Layout';
import MyFab from '../components/MyFab';
import GlassCreditCard from '../components/GlassCreditCard';
  
const CreditCardPage = () => {
    return (
        <Layout>
            <Link to="/">
                <MyFab />
            </Link>
            <h4>My Changes</h4>
            <ul>
                <li>Fixed attributes to camelCase (eg: class)</li>
                <li>Edited z-index, so circles appear properly </li>
            </ul>
            <br />
            <GlassCreditCard />
        </Layout>
    )
};

export default CreditCardPage;