import React from 'react';
import { Link } from "gatsby";
import MyFab from '../components/MyFab';
import PlayPauseAnimation from '../components/PlayPauseAnimation';
  
const PlayPauseAnimationPage = () => {
    return (
        <main style={{width: '1000px', marginTop: '500px'}}>
            <Link to="/">
                <MyFab />
            </Link>
            <PlayPauseAnimation />
        </main>
    )
};

export default PlayPauseAnimationPage;