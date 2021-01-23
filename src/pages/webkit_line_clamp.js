import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/_layout/Layout';
import MyFab from '../components/MyFab';
import WebkitLineClamp from '../components/WebkitLineClamp';
  
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
            <WebkitLineClamp />
        </Layout>
    )
};

export default CreditCardPage;