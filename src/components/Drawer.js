function Drawer({ onClickDrawer, items}) {
    return(
        <>
            <div className="overlay">
                <div className="drawer">
                    <h2 className="d-flex justify-between align-center mb-30">
                        Корзина
                        <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={onClickDrawer}/>
                    </h2>
                    <div className="items">
                        {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20" key={obj.name}>
                            <img className="mr-20" width={70} height={70} src={obj.img} alt="Sneakers1" />
                            <div className="mr-20">
                            <p>{obj.name}</p>
                            <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                        ))}
                    </div>
                        <div className="cartTotalBlock">
                        <ul>
                            <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                            </li>
                            <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Заказать"/></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Drawer;