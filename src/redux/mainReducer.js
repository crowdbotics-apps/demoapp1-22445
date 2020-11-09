import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1169940Reducer from '../features/EmailAuth1169940/redux/reducers';
import Dashboard12169939Reducer from '../features/Dashboard12169939/redux/reducers'
import SignUp23169938Reducer from '../features/SignUp23169938/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1169940: EmailAuth1169940Reducer,
Dashboard12169939: Dashboard12169939Reducer,
SignUp23169938: SignUp23169938Reducer,

});