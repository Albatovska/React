import React from 'react'
import LogInModal from "./log-in-modal/log-in-modal";
import {connect} from "react-redux";
import {closeModal} from "../../actions";

const Modals = ({modals, close}) => {

    const { loginModal } = modals;

    if(loginModal) return <LogInModal close={close}/>;

    return ""

};

const mapStateToProps = ({modals}) => {
    return {modals}
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals)

