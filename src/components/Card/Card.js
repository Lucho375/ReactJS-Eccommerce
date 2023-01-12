import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Card.css"
import Loading from "../Loading/Loading";
import Slider from "../Slider/Slider";
import { getProductById } from "../../getData";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Card = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
        .then(resp => {
            setData(resp)
            setLoading(false)
        })
    })

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className="card">
                        <Slider arr={data.images} />
                        <div className="card__content">
                            <h2 className="card__title">{data.name}</h2>
                            <span>Precio: us${data.price}</span>
                            <ItemCount {...data}/>
                        </div>
                    </div>
            }
        </>
    )
}

export default Card;