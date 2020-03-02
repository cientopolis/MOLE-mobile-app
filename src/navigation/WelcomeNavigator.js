import { createStackNavigator } from 'react-navigation-stack'
import {
  WelcomeScreen,
  ActivityPickerModal,
  NewActivityModal,
  CameraModalActivity,
} from '../containers'

//Navegador de pantalla de bienvenida
const WelcomeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    ActivityPickerModal: {
      screen: ActivityPickerModal,
    },
    NewActivityModal: {
      screen: NewActivityModal,
    },
    CameraModalActivity: {
      screen: CameraModalActivity,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default WelcomeNavigator
