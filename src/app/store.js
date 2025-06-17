// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import { combineReducers } from "redux";
import counterSlice from "./features/counter/counterSlice"; // Make sure this is the reducer, not the slice object
// import thunk from "redux-thunk"; // ✅ Correct default import

// // Combine all reducers
// const rootReducer = combineReducers({
//   counter: counterSlice,
// });

// // Persist config
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Wrap with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(thunk),
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
