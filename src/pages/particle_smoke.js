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
            <ParticleSmoke />
        </Layout>
    )
};

export default ParticleSmokePage;