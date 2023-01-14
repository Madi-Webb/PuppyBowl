const Grass = () => {

    const colors = ['green', 'darkgreen', 'olive'];

    var grassArray = new Array(100);
    grassArray.fill(0, 0, 100);


    return (
        <div className='grass-container'>
            { 
                grassArray.map((grass, idx) => {
                    return <div key={idx} className="grass" style={{ 
                        height: Math.random() * 25 + 65 + "%", 
                        left: idx + "%", 
                        width: Math.random() * 1.5 + 0.5 + "vw",
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
                        animationDelay: Math.random() * 3 + "s", 
                        zIndex: idx % 2 === 0 ? -1 : 1 }}>
                    </div>
                })
            }
        </div>
    )
}

export default Grass;