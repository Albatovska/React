export const changeCatalogList = payload => {
    return {
        type: 'CHANGE_CATALOG_LIST',
        payload,
    };
};

export const changeLoading = payload => {
    return {
        type: 'CHANGE_LOADING',
        payload,
    };
};

export const fetchDevices = (getDevices, dispatch, id) => {
    dispatch(changeLoading(true));
    getDevices(id).then(data => {
        dispatch(changeCatalogList({ data, id }));
        dispatch(changeLoading(false));
    });
};

export const fetchCurrentDevice = (getCurrentDevice, dispatch, id) => {
    getCurrentDevice(id).then(data => {
        dispatch(createCurrentDevice(data));
    });
};

export const createCurrentDevice = payload => {
    return {
        type: 'CREATE_CURRENT_DEVICE',
        payload,
    };
};

export const openLoginModal = () => {
    return {
        type: "OPEN_LOGIN_MODAL",
    }
};
export const openRegistrationModal = () => {
    return {
        type: "OPEN_REGISTRATION_MODAL"
    }
};

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    };
};

export const updateUser = payload => {
    return {
        type: 'UPDATE_USER',
        payload,
    };
};

export const addToCart = payload => {
    return {
        type: 'ADD_TO_CART',
        payload,
    };
};

export const changeCount = payload => {
    return {
        type: 'CHANGE_COUNT',
        payload,
    };
};

export const clearCart = payload => {
    return {
        type: 'CLEAR_CART',
        payload,
    };
};

export const makeOrder = (makeOrder, dispatch, cart) => {
    makeOrder(cart).then(data => {
        dispatch(makeResult(data));
    });
};

const makeResult = payload => {
    console.log(payload);
    return {
        type: 'MAKE_RESULT',
        payload,
    };
};
export const changeBestSales = payload => {
    return {
        type: 'CHANGE_BEST_SALES',
        payload,
    };
};

export const loadingBestSales = payload => {
    return {
        type: 'LOADING_BEST_SALES',
        payload,
    };
};
export const fetchBestSales = (getBestSales, dispatch) => {
    dispatch(loadingBestSales(true));
    getBestSales()
        .then((data) => {
            dispatch(changeBestSales(data));
            dispatch(loadingBestSales(false))
        })
};