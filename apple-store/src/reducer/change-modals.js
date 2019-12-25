export const changeModals = (state, action) => {

    if(state === undefined) {
        return {}
    }

    switch (action.type) {
        case "OPEN_LOGIN_MODAL":
            return { loginModal: true };
        case  "CLOSE_MODAL":
            return {};
        default:
            return state.modals
    }
};