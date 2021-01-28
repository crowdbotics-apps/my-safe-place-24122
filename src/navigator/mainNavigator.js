import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen7197970Navigator from '../features/BlankScreen7197970/navigator';
import BlankScreen6197967Navigator from '../features/BlankScreen6197967/navigator';
import BlankScreen5197966Navigator from '../features/BlankScreen5197966/navigator';
import BlankScreen82197965Navigator from '../features/BlankScreen82197965/navigator';
import BlankScreen81197964Navigator from '../features/BlankScreen81197964/navigator';
import BlankScreen80197963Navigator from '../features/BlankScreen80197963/navigator';
import BlankScreen79197962Navigator from '../features/BlankScreen79197962/navigator';
import BlankScreen78197961Navigator from '../features/BlankScreen78197961/navigator';
import Settings197856Navigator from '../features/Settings197856/navigator';
import UserProfile197849Navigator from '../features/UserProfile197849/navigator';
import Settings197848Navigator from '../features/Settings197848/navigator';
import Settings197846Navigator from '../features/Settings197846/navigator';
import UserProfile197831Navigator from '../features/UserProfile197831/navigator';
import Settings197801Navigator from '../features/Settings197801/navigator';
import UserProfile197791Navigator from '../features/UserProfile197791/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen7197970: { screen: BlankScreen7197970Navigator },
BlankScreen6197967: { screen: BlankScreen6197967Navigator },
BlankScreen5197966: { screen: BlankScreen5197966Navigator },
BlankScreen82197965: { screen: BlankScreen82197965Navigator },
BlankScreen81197964: { screen: BlankScreen81197964Navigator },
BlankScreen80197963: { screen: BlankScreen80197963Navigator },
BlankScreen79197962: { screen: BlankScreen79197962Navigator },
BlankScreen78197961: { screen: BlankScreen78197961Navigator },
Settings197856: { screen: Settings197856Navigator },
UserProfile197849: { screen: UserProfile197849Navigator },
Settings197848: { screen: Settings197848Navigator },
Settings197846: { screen: Settings197846Navigator },
UserProfile197831: { screen: UserProfile197831Navigator },
Settings197801: { screen: Settings197801Navigator },
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
