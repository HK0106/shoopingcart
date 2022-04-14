import classes from './Cart.module.css';
import Modal from '../UI/Model'

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-item']}>{[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => {<li>{item.name}</li>})}</ul>

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>
                    36.5
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Oder</button>
            </div>
        </Modal>
    );
}

export default Cart;