import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/_layout/Layout';
import MyFab from '../components/MyFab';
import ParticleSmoke from '../components/ParticleSmoke';
  
const ParticleSmokePage = () => {
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
            <ParticleSmoke />
        </Layout>
    )
};

export default ParticleSmokePage;