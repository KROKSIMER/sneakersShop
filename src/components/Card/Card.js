import React from "react";
import Style from "./Card.module.scss"


function Card({id, name, img, price, onFavorite, onPlus}) {
    const [isAdded, setAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({id, name, img, price});
        setAdded(!isAdded)
    }
    return (
        <>
            <div className={Style.card}>
                <div className={Style.favorite}>
                    <img src="/img/unliked.svg" alt="unlike" onClick={onFavorite} />
                </div>
                <img width={133} height={112} src={img} alt="" />
                <h5>{name}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price}</b>
                    </div>
                    <img className={Style.plus} onClick={onClickPlus} src={!isAdded ? "/img/btn-plus.svg" : "/img/btn-checked.svg"} alt="Добавить в корзину" />
                </div>
            </div>
        </>
    )
}
export default Card;