import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen81197964Navigator from '../features/BlankScreen81197964/navigator';
import BlankScreen80197963Navigator from '../features/BlankScreen80197963/navigator';
import BlankScreen79197962Navigator from '../features/BlankScreen79197962/navigator';
import BlankScreen78197961Navigator from '../features/BlankScreen78197961/navigator';
import Settings197856Navigator from '../features/Settings197856/navigator';
import UserProfile197849Navigator from '../features/UserProfile197849/navigator';
import Settings197848Navigator from '../features/Settings197848/navigator';
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
BlankScreen81197964: { screen: BlankScreen81197964Navigator },
BlankScreen80197963: { screen: BlankScreen80197963Navigator },
BlankScreen79197962: { screen: BlankScreen79197962Navigator },
BlankScreen78197961: { screen: BlankScreen78197961Navigator },
Settings197856: { screen: Settings197856Navigator },
UserProfile197849: { screen: UserProfile197849Navigator },
Settings197848: { screen: Settings197848Navigator },
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
