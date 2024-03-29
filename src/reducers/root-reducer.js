import { combineReducers } from "redux";

import perfumeReducer from "./perfume-reducer";
import authReducer from "./auth-reducer";
import cartReducer from "./cart-reducer";
import adminReducer from "./admin-reducer";
import userReducer from "./user-reducer";
import orderReducer from "./order-reducer";

const  rootReducer = combineReducers({
    perfume:perfumeReducer,
    auth:authReducer,
    cart:cartReducer,
    admin:adminReducer,
    order:orderReducer,
    user:userReducer
});

export default rootReducer;