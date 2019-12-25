import React, {Component} from 'react'
import {connect} from "react-redux";
import "./card-item-page.sass"
import {addToCart, fetchCurrentDevice, openLoginModal} from "../../../actions";
import withService from "../../hoc/with-service";
import {withRouter} from "react-router-dom";

class CardItemPage extends Component {

    componentDidMount() {
        this.props.getCurrentDevice(this.props.id);
    }

    render(){
        const {device, addToCart, list, openLoginModal, user} = this.props;
        const inCart = list.some(el => device.id === el.id);

        return(
            <div className = {"product-cart"}>
                <div className="wrap">
                    <div className="page-title">Product Cart</div>
                    <div className="container">
                        <div className="img">
                            <img src={device.img} alt=""/>
                        </div>
                        <div className="content">
                            <div className="item model">{device.model}</div>
                            <div className="item price">Price: <span>{device.price}$</span></div>
                            <div className="item desc">{device.description}</div>
                            <button
                                // onClick={() => user? addToCart(device) : openLoginModal()}
                                onClick={() => addToCart(device)}
                                disabled={inCart}
                                className="item button add-item" >
                                { inCart?
                                    <span>
                                        Added to cart
                                        <i className="fab fa-angellist"></i>
                                    </span> : "Add To Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({currentDevice:device, cart, user}) => {
    return {device, list:cart.list, user}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {service} = ownProps;
    return {
        getCurrentDevice: (id) => fetchCurrentDevice(service.getCurrentDevice, dispatch, id),
        addToCart: (device) => dispatch(addToCart(device)),
        openLoginModal: () => dispatch(openLoginModal())
    }
};

export default (
    withRouter(
        withService(
            connect(mapStateToProps, mapDispatchToProps)(CardItemPage)
        )
    )
)