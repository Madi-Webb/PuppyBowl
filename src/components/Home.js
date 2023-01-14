import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const [ poopCount, setPoopCount ] = useState(0);
    const [ winner, setWinner ] = useState(false);

    var poopArray = new Array(20);
    poopArray.fill(0, 0, 20);


    function handlePoopClick(event) {
        event.target.style.display = 'none';
        setPoopCount(poopCount + 1);
        if ( poopCount == 19 ) {
            console.log('winner')
            setWinner(true);
        }
    }


    return (
        <div className='home-container'>
            <div className={!winner ? 'welcome-message-container' : 'welcome-message-container forward'}>
                <div className="welcome-message">Welcome to Puppy Bowl!</div>
                <div className="instructions" onClick={() => navigate('/puppies')}><div className={ winner ? 'pulsate' : ''}><strong className={ winner ? 'hurry ' : ''}><u>Come in</u></strong> and check out the dogs! </div><div className={ winner ? 'hidden' : ''}>... or stay out here and help clean up</div></div>
            </div>

            <div className={!winner ? 'trash-can-container' : 'hidden'}>
                <img className='trash-can' src='https://i.imgur.com/IjXDv3D.png'></img>
                <div className='poop-count'>{poopCount}</div>
            </div>

            <div className={winner ? 'winner-container' : 'hidden'}>
                <div className='winner-thanks'>Thank you!</div>
                <img className='winner-pic' src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/12/30151747/Pembroke-Welsh-Corgi-smiling-and-happy-outdoors.jpeg'></img>
            </div>

            { 
                poopArray.map((poop, idx) => {
                    return <div key={idx} onClick={(event) => handlePoopClick(event)} className="poop" style={{ 
                        left: Math.random() * 80 + 6 + "%", 
                        bottom: Math.random() * 70 + "%"}}>
                    💩</div>
                })
            }
        </div>
    )
}

export default Home;