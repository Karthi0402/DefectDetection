import React, { useState } from 'react';
import './carousel.css';
import { images } from '../Helpers/cimage';
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
const Carousel1 = () => {
    const [cimage1, setCimage1] = useState(0)
    return (
        <div className='carousel'>
            <div className='carouselinner'
                style={{ backgroundImage: `url(${images[cimage1].img})` }}
            >
                <div className='left' onClick={() => {
                    cimage1 > 0 && setCimage1(cimage1 - 1);
                }}
                ><ArrowBackIos /></div>
                <div className='center'>
                    <h1>{images[cimage1].title}</h1>
                </div>
                <div className='right' onClick={() => {
                    cimage1 < images.length - 1 && setCimage1(cimage1 + 1);
                }}
                ><ArrowForwardIos /><n /></div>
            </div>
            <br/><br/>
        </div>

    )
}

export default Carousel1