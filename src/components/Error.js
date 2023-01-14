import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div className="container">
            <div className="error-message">💩woops... error {':('}</div>
            <Link to='/' className="go-back-link">go back</Link>
        </div>
    )
}

export default Error;