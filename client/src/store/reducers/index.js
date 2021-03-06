import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from "./registerReducer";
import shopReducer from "./shopReducer";
import nearbyReducer from "./nearbyReducer";
import barberReducer from "./barberReducer";
import servicesReducer from "./servicesReducer";
import cartReducer from "./cartReducer";
import timeReducer from "./timeReducer";
import paymentReducer from "./paymentReducer";
import bookingReducer from "./bookingReducer";
import userReducer from "./userReducer";
import reviewsReducer from "./reviewsReducer";
import logoutReducer from "./logoutReducer";


export default combineReducers({
  auth: authReducer,
    register : registerReducer,
    shop : shopReducer,
    nearby : nearbyReducer,
    barber : barberReducer,
    services : servicesReducer,
    cart : cartReducer,
    time : timeReducer,
    payment : paymentReducer,
    booking : bookingReducer,
    user : userReducer,
    reviews : reviewsReducer,
    logout : logoutReducer,
});
