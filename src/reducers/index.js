import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer";
import { createAccReducer } from "./createAccReducer";
import { checkSessionReducer } from "./checkSessionReducer";
import { loginReducer } from "./loginReducer";
import { tmdbReducer } from "./tmdbReducer";
import { movieModalReducer } from "./movieModalReducer";



const rootReducer = combineReducers({
	sampleReducer,
	createAccReducer,
	checkSessionReducer,
	loginReducer,
	movieModalReducer,
	tmdbReducer,
	routing: routerReducer
});
export default rootReducer;
