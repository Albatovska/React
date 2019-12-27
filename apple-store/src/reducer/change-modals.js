export const changeModals = (state, action) => {

    if (state === undefined) {
        return {}
        //registrationModal: true
    }

    switch (action.type) {
        case "OPEN_LOGIN_MODAL":
            return { loginModal: true };
        case "OPEN_REGISTRATION_MODAL":
            return {
                registrationModal: true
            };
        // case "OPEN_MODAL":
        //     if (action.payload === 'login') return { loginModal: true };
        //     if (action.payload === 'registration') return { registrationModal: true }; break;
        case "CLOSE_MODAL":
            return {};
        default:
            return state.modals
    }
};