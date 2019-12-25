export const makeResult = (state, action) => {

    if(state === undefined) {
        return false
    }

    switch (action.type) {
        case "MAKE_RESULT":
            return action.payload;
        default:
            return state.result
    }
};