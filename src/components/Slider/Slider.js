import React, { useState } from "react";
import left from "./left.png"
import right from "./right.png"
import "./Slider.scss"
import SliderSelect from "./SliderSelect";

const Slider = ({ arr }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [active, setActive] = useState("slider__container__img--active")

    const prevSlide = () => {
        const firstImage = currentIndex === 0;
        const newIndex = firstImage ? arr.length - 1 : currentIndex - 1;
        setActive("")
        setTimeout(() => {
            setCurrentIndex(newIndex)
            setActive(active)
        }, 600)
    }

    const nextSlide = () => {
        const lastImage = currentIndex === arr.length - 1;
        const newIndex = lastImage ? 0 : currentIndex + 1;
        setActive("")
        setTimeout(() => {
            setCurrentIndex(newIndex)
            setActive(active)
        }, 600)
    }

    return (
        <div>
            <div className="slider__container">
                <img className="slider__container__arrow" src={left} onClick={prevSlide} alt="left arrow" />
                <img className={`slider__container__img ${active}`} src={arr[currentIndex]} alt="product" />
                <img className="slider__container__arrow" src={right} onClick={nextSlide} alt="right arrow" />
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