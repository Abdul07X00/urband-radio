import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screen/splash/SplashScreen';
import HomeScreen from '../screen/home/HomeScreen';

const MainAppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const SplashSwitch = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    MainAppScreen: MainAppStack,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

export default createAppContainer(SplashSwitch);
