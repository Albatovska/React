import React from 'react';
import { connect } from "react-redux";
import LogInModal from "./log-in-modal/log-in-modal";
import RegistrationModal from './registration-modal/registration-modal';
import { closeModal } from "../../actions";

const Modals = ({ modals, close }) => {
   
    const { loginModal, registrationModal } = modals;

    if (loginModal) return <LogInModal close={close} />;
    if (registrationModal) return <RegistrationModal close={close} />;

    return ""

};

const mapStateToProps = ({ modals }) => {
    return { modals }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals)

