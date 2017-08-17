import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";



import { sampleReducer } from "./sampleReducer";
import { createAccReducer } from "./createAccReducer";
import { checkSessionReducer } from "./checkSessionReducer";
import { loginReducer } from "./loginReducer";
import { tmdbReducer } from "./tmdbReducer";
import { lightboxReducer } from "./lightboxReducer";



const rootReducer = combineReducers({
	sampleReducer,
	createAccReducer,
	checkSessionReducer,
	loginReducer,
	lightboxReducer,
	tmdbReducer,
	routing: routerReducer
});
export default rootReducer;
