import React, { useState } from 'react';
import './carousel.css';
import { images } from '../Helpers/cimage';
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
const Carousel = () => {
    const [cimage, setCimage] = useState(2)
    return (
        <div className='carousel'>
            <div className='carouselinner'
                style={{ backgroundImage: `url(${images[cimage].img})` }}
            >
                <div className='left' onClick={() => {
                    cimage > 0 && setCimage(cimage - 1);
                }}
                ><ArrowBackIos /></div>
                <div className='center'>
                    <h1>{images[cimage].title}</h1>
                </div>
                <div className='right' onClick={() => {
                    cimage < images.length - 1 && setCimage(cimage + 1);
                }}
                ><ArrowForwardIos /><n /></div>
            </div>
            <br/><br/>
        </div>

    )
}

export default Carousel