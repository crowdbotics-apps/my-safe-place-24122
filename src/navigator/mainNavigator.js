import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings197846Navigator from '../features/Settings197846/navigator';
import SignIn2197844Navigator from '../features/SignIn2197844/navigator';
import UserProfile197831Navigator from '../features/UserProfile197831/navigator';
import Tutorial197830Navigator from '../features/Tutorial197830/navigator';
import NotificationList197802Navigator from '../features/NotificationList197802/navigator';
import Settings197801Navigator from '../features/Settings197801/navigator';
import Settings197793Navigator from '../features/Settings197793/navigator';
import UserProfile197791Navigator from '../features/UserProfile197791/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings197846: { screen: Settings197846Navigator },
SignIn2197844: { screen: SignIn2197844Navigator },
UserProfile197831: { screen: UserProfile197831Navigator },
Tutorial197830: { screen: Tutorial197830Navigator },
NotificationList197802: { screen: NotificationList197802Navigator },
Settings197801: { screen: Settings197801Navigator },
Settings197793: { screen: Settings197793Navigator },
UserProfile197791: { screen: UserProfile197791Navigator },

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
