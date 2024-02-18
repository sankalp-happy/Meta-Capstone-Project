const Card = (props) => {
    return (
        <div className={props.class}>
        <img src={props.link} alt="Pic" />
        <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <h4 className="card-price">{props.price}</h4>
            <p className="card-info">{props.content}</p>
            <div className="order-button">
                <h5 className="order"><button id="order" onClick={() => {props.func("order")}}>Order delivery</button></h5>
            </div>
        </div>
    </div>
    );
}
export default Card;