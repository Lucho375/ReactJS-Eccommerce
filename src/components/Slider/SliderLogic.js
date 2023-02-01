import { useState, useEffect } from "react";

export const SliderLogic = (arr,autoSlide) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [active, setActive] = useState("slider__container__img--active")

    useEffect(() => {
        if (autoSlide) {
            const lastImage = currentIndex === arr.length - 1;
            const newIndex = lastImage ? 0 : currentIndex + 1;
            const auto = setInterval(() => {
                setCurrentIndex(newIndex)
            }, 5000)
            return () => clearInterval(auto)
        }
    }, [currentIndex])

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
    return{
        currentIndex,
        active,
        prevSlide,
        nextSlide,
        setCurrentIndex
    }
}