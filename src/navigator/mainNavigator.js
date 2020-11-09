import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth1169940Navigator from '../features/EmailAuth1169940/navigator';
import Dashboard12169939Navigator from '../features/Dashboard12169939/navigator';
import SignUp23169938Navigator from '../features/SignUp23169938/navigator';
import Maps4169937Navigator from '../features/Maps4169937/navigator';
import Feed6169935Navigator from '../features/Feed6169935/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth1169940: { screen: EmailAuth1169940Navigator },
Dashboard12169939: { screen: Dashboard12169939Navigator },
SignUp23169938: { screen: SignUp23169938Navigator },
Maps4169937: { screen: Maps4169937Navigator },
Feed6169935: { screen: Feed6169935Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
