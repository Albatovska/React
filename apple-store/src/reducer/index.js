import { changeCatalogState } from './change-catalog-state';
import { createCurrentDevice } from './create-current-device';
import { changeModals } from './change-modals';
import { updateUser } from './update-user';
import { changeCart } from './change-cart';
import { makeResult } from './make-result';
import { BestSales } from './best-sales';

const reducer = (state, action) => {
    console.log('MAIN STATE', state);
    return {
        user: updateUser(state, action),
        catalog: changeCatalogState(state, action),
        currentDevice: createCurrentDevice(state, action),
        modals: changeModals(state, action),
        cart: changeCart(state, action),
        result: makeResult(state, action),
        bestSales: BestSales(state, action),
    };
};

export default reducer;

//
// const initialState = {
//     catalog: [],
//     loading: false
// };
//
// const reducer = (state, action) => {
//
//     if(state === undefined){
//         return initialState
//     }
//
//     switch (action.type) {
//         case "CHANGE_CATALOG_LIST":
//             return {
//                 ...state,
//                 catalog: action.payload
//             };
//         case "CHANGE_LOADING":
//             return {
//                 ...state,
//                 loading: action.payload
//             };
//         default:
//             return state
//     }
// };
//
// export default reducer