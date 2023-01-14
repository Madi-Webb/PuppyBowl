import { useState } from 'react';

import Card from "./Card";

const About = () => {

    const [ winner, setWinner ] = useState(false);


    function handlePoopClick(event) {
        event.target.style.display = 'none';
        setWinner(true);
    }


    return (
        <div>
            <div className={ !winner ? "about-message-container" : "hidden"}>
                <div className="about-message">
                    Maybe the real Puppy Bowl was the friends we made along the way. . . 
                </div>
            </div>

            <div className={ winner ? "secret-koda-container" : "hidden"}>
                <div className="secret-message">You unlocked the ultimate, most powerful puppy... mine.</div>
                <div>
                    <Card className='koda-card' puppy={{
                        id: 420,
                        name: 'Koda', 
                        breed: 'Yorkie / Shih Tzu', 
                        status: 'legend', 
                        imageUrl: 'https://i.imgur.com/dPhG9nS.jpg',
                        teamId: 'mine',
                        isKoda: true
                        }}/>
                </div>
            </div>

            <div onClick={(event) => handlePoopClick(event)} className="poop" style={{ 
                        left: Math.random() * 80 + 6 + "%", 
                        bottom: Math.random() * 30 + "%"}}>
            💩</div>
            
        </div>
    )
}

export default About;