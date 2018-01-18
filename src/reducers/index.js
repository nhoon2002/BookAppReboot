import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer";
import { createAccReducer } from "./createAccReducer";
import { checkSessionReducer } from "./checkSessionReducer";
import { loginReducer } from "./loginReducer";
import { tmdbReducer } from "./tmdbReducer";
import { movieModalReducer } from "./movieModalReducer";
import { firebaseDbReducer } from "./firebaseDbReducer";
import { notificationReducer } from "./notificationReducer";



const rootReducer = combineReducers({
	sampleReducer,
	createAccReducer,
	checkSessionReducer,
	loginReducer,
	movieModalReducer,
	tmdbReducer,
	firebaseDbReducer,
	notificationReducer,
	routing: routerReducer
});
export default rootReducer;
