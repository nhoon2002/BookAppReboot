import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer";
import { createAccReducer } from "./createAccReducer";
import { checkSessionReducer } from "./checkSessionReducer";
import { loginReducer } from "./loginReducer";
import { tmdbReducer } from "./tmdbReducer";
import { movieModalReducer } from "./movieModalReducer";
import { firebaseDbReducer } from "./firebaseDbReducer";



const rootReducer = combineReducers({
	sampleReducer,
	createAccReducer,
	checkSessionReducer,
	loginReducer,
	movieModalReducer,
	tmdbReducer,
	firebaseDbReducer,
	routing: routerReducer
});
export default rootReducer;
