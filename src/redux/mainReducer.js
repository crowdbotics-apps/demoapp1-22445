import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard12169939Reducer from '../features/Dashboard12169939/redux/reducers'
import SignUp23169938Reducer from '../features/SignUp23169938/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard12169939: Dashboard12169939Reducer,
SignUp23169938: SignUp23169938Reducer,

});