import React, { useEffect, useState } from "react";
import left from "./left.png"
import right from "./right.png"
import "./Slider.scss"
import SliderSelect from "./SliderSelect";
import { SliderLogic } from "./SliderLogic";

const Slider = ({ arr, autoSlide = false }) => {
    const {currentIndex, prevSlide, nextSlide, active, setCurrentIndex} = SliderLogic(arr, autoSlide);

    return (
        <div>
            <div className="slider__container">
                {autoSlide ? null : <img className="slider__container__arrow" src={left} onClick={prevSlide} alt="left arrow" />}
                <img className={`slider__container__img ${active}`} src={arr[currentIndex]} alt="product" />
                {autoSlide ? null : <img className="slider__container__arrow" src={right} onClick={nextSlide} alt="right arrow" />}
            </div>
            <div className="dots__container">
                {
                    arr.map((img, index) => (
                        <SliderSelect onClick={() => setCurrentIndex(index)} key={index} className={index === currentIndex ? "dots__container__dot--active" : "dots__container__dot"} />
                    ))
                }
            </div>
        </div>
    )
}

export default Slider;