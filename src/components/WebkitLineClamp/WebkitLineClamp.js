import React from 'react';
import './WebkitLineClamp.css';

function WebkitLineClamp() {
    return (
        <div class="demo-grid">
            <div class="demo-card">
                <img width="200" height="200" src="https://placekitten.com/200/200?image=1" alt="" class="demo-img" />
                <h1 class="line-clamp demo-title">
                    Spill litter box, scratch at owner, destroy all furniture, especially couch
                </h1>
            </div>

            <div class="demo-card">
                <img width="200" height="200" src="https://placekitten.com/200/200?image=2" alt="" class="demo-img" />
                <h1 class="line-clamp demo-title">
                    Claws in the eye of the beholder
                </h1>
            </div>

            <div class="demo-card">
                <img width="200" height="200" src="https://placekitten.com/200/200?image=3" alt="" class="demo-img" />
                <h1 class="line-clamp demo-title">
                    Relentlessly pursues moth eat too much then proceed to regurgitate all over living room carpet while humans eat dinner
                </h1>
            </div>
        </div>
    )
}

export default WebkitLineClamp;