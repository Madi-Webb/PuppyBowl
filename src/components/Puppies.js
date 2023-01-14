import { useOutletContext } from "react-router-dom";


import Card from "./Card";

const Puppies = () => {

    const { puppyList } = useOutletContext();


    const sliderLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 330
    }

    const sliderRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 330
    }


    return (
        <div>

            <div className='cards-container'>
                <div className='slider-nav' onClick={sliderLeft}>{'<'}</div>

                <div className='slider' id='slider'>
                    {
                        puppyList && puppyList.length ? puppyList.map((puppy, idx) => {
                            return <Card puppy={puppy} key={idx} />
                        }) : <div className="waiting-container"><div className="waiting-message">Fetching puppies...</div><div className="spinner"></div></div>
                    }
                </div>

                <div className='slider-nav' onClick={sliderRight}>{'>'}</div>
            </div>
        </div>
    )
}

export default Puppies;