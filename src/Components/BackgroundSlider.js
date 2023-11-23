import './Styles/BackgroundSlider.css';
import imageSlide from '../Assets/others/data';
import { useEffect, useState } from 'react';
import React from "react";

const BackgroundSlider = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 960;

    React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

    const[currentState, setCurrentState]= useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===4){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },7000)
        return ()=> clearTimeout(timer) 
    })

    const bgImageStyle ={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        transition: "all 1.5s ease-in-out",
    }

    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }

    return(
        <div className='countiner'>
            {/*<div style={(width > breakpoint) ? bgImageStyle : null}>*/}
            <div style={bgImageStyle}>
                <div className='description'>
                    <h1>{imageSlide[currentState].title}</h1>
                    <p>{imageSlide[currentState].body}</p>
                    <div className='carousel'>
                    {
                        imageSlide.map((imageSlide,currentState)=>(
                            <span key={currentState} onClick={()=> goToNext(currentState)}></span>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundSlider