import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import '../style.css';

import Grass from './Grass';
import Navbar from './Navbar';

const App = () => {

    const [ puppyList, setPuppyList ] = useState([]);


    useEffect(() => {
        async function fetchPuppyBowlData() {
            try {
                const response = await fetch(" https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-MT-WEB-FT/players");
                const results = await response.json();
                setPuppyList(results.data.players);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPuppyBowlData();
    }, []);


    return (
        <div className='container'>
            <header>
                <div className='logo'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/American_football.svg/2048px-American_football.svg.png' className='football'></img>
                    <div className='title'><div>Puppy</div><div className='bowl'>Bowl</div></div>
                </div>
                <Navbar />
            </header>

            <Grass puppyList={puppyList} setPuppyList={setPuppyList}/>

            <Outlet context={{ puppyList, setPuppyList }}/>
        </div>
    )
}

export default App;