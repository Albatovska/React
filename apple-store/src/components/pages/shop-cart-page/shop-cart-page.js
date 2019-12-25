import React from 'react'
import './shop-cart-page.sass'
import {addToCart, changeCount, clearCart, fetchCurrentDevice, fetchDevices, makeOrder} from "../../../actions";
import withService from "../../hoc/with-service";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const ShopCartPage = ({cart, changeCount, clearCart, makeOrder, history}) => {
    const {list=[]} = cart;

    const createOrder = () => {
        makeOrder(cart);
        history.push("/result-page")
    }

    if(!list.length) return <div>There are no items in your cart yet</div>

    return(
        <div className={"wrapper"}>
            <div className={"wrap"}>
                <table border="1">
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    {
                        list.map((el,ind) => {
                            return(
                                <tr key = {el.id}>
                                    <td>{ind+1}</td>
                                    <td>{el.model}</td>
                                    <td><img src={el.img} alt=""/></td>
                                    <td>{el.description}</td>
                                    <td>{el.count}</td>
                                    <td>{el.price}</td>
                                    <td className = "actions-td">
                                        <span
                                            onClick={() => changeCount(el.id, -1)}
                                            className = {"decrement action"}>
                                            <i className="far fa-minus-square"></i>
                                        </span>
                                        <span
                                            onClick={() => changeCount(el.id, 0 - el.count)}
                                            className = {"delete action"}>
                                            <i className="far fa-trash-alt"></i>
                                        </span>
                                        <span
                                            className = {"increment action"}
                                            onClick={() => changeCount(el.id, 1)}>
                                            <i className="far fa-plus-square"></i>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
                <div className = {"total"}>Total: {cart.sum}$</div>
                <div className="button-container">
                    <div className="clearCart button" onClick={clearCart}>Clear cart</div>
                    <div className="makeOrder button" onClick={createOrder}>Make order</div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({cart}) => {
    return {cart}
};


const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        changeCount: (id, count) => dispatch(changeCount({id, count})),
        clearCart: () => dispatch(clearCart()),
        makeOrder: (cart) => makeOrder(service.makeOrder, dispatch, cart),
    }
};

export default (
    withRouter(
        withService(
            connect(mapStateToProps, mapDispatchToProps)(ShopCartPage)
        )
    )
)