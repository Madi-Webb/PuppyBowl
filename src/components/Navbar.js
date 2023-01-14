import { Link } from 'react-router-dom';

import { GiDogHouse } from 'react-icons/gi';
import { FaFootballBall, FaDog } from 'react-icons/fa';

const Navbar = () => {

    return (
        <div>
            <nav>
                <Link to='/' className='nav-link'><GiDogHouse />Home</Link>
                <Link to='/puppies' className='nav-link'><FaDog />Puppies</Link>
                <Link to='/about' className='nav-link'><FaFootballBall />About</Link>
            </nav>
        </div>
    )
}

export default Navbar;