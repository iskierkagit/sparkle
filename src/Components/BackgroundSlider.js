import './Styles/BackgroundSlider.css';
import imageSlide from '../Assets/others/data';
import { useEffect, useState } from 'react';
import React from "react";

const BackgroundSlider = () => {
    const [loading, setLoading] = useState(true);
    const[currentState, setCurrentState]= useState(0);
    const [currentImage, setCurrentImage] = useState(`url(${imageSlide[currentState].url})`);
    
    const fetchImage = (currentStateParameter) => {
        const loadingImage = new Image();
        loadingImage.src = imageSlide[currentStateParameter].url;
        loadingImage.onload = () => {
            setCurrentState(currentStateParameter);
            setCurrentImage(`url(${imageSlide[currentStateParameter].url})`);
            setLoading(false);
        };
      };

    fetchImage(currentState);
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===4){
                fetchImage(0);
            }else{
                fetchImage(currentState+1);
            }
        },8000)

        return ()=> clearTimeout(timer) 
    })

    const bgImageStyle ={
        filter: `${loading ? 'blur(8px)' : ''}`,
                backgroundImage: currentImage,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100%',
                transition: "all 1.5s linear",
    }

    const goToNext = (currentState) => {
        fetchImage(currentState);
    }

    const currentValue = imageSlide[currentState].currentValue;

    return(
        <div className='countiner'>
            <div style={bgImageStyle}>
                <div className='description'>
                    <h1>{imageSlide[currentState].title}</h1>
                    <p>{imageSlide[currentState].body}</p>
                    <div className='carousel'>
                    {
                        imageSlide.map((imageSlide ,currentState)=>(
                            <span className={`${currentState ===  currentValue? 'currentSpan' : null}`} key={currentState} onClick={()=> goToNext(currentState)}></span>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundSlider