
const Card = ({puppy}) => {
    // console.log('puppy', puppy);

    return (
        <div className={ !puppy.isKoda ? "card" : "koda-card card"}>
            <div className="card-contents">
                <div className="name">{puppy.name}</div>
                <div className="breed">{puppy.breed}</div>
                <div className="info-container">
                    <div className="info">Team: {puppy.teamId}</div>
                    <div className="info">Status: {puppy.status}</div>
                </div>
                <img src={puppy.imageUrl}></img>
            </div>
        </div>
    )
}

export default Card;