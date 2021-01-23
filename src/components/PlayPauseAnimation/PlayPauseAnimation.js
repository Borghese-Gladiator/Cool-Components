import React from 'react';
import './PlayPauseAnimation.css'

export default function PlayPauseAnimation() {
    return (
        <div>
            <input type="checkbox" data-animation-pause id="css-toggle" className="hidden" />
            <label className="chk" htmlFor="css-toggle">
                Toggle animations
            </label>
            <div className="circle a-slide" data-animation="stop">I will play/pause</div>
            <div className="circle a-slide" data-animation="once" style={{"--bgc":"tomato", "--animdel":"250ms"}}>I will play/pause</div>
            <div className="circle a-slide" data-animation="slow" style={{"--bgc":"tan", "--animdel":"500ms"}}>I will play/pause</div>
            <div className="circle a-slide" data-animation style={{"--bgc":"orange","--animdel":"750ms"}}>I will play/pause</div>
            <div className="circle a-pulse" data-animation="alternate" style={{"--bgc":"purple"}}>I will play/pause</div>
        </div>
    )
}