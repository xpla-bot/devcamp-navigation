import { Navigation } from 'react-native-navigation';
import Welcome from './Welcome';
import HomeIcon from './icons/home.png';
import SettingsIcon from './icons/settings.png';
import HomeTab from './HomeTab';

export default function startApp() {
  Navigation.registerComponent('screen.welcome', () => Welcome);
  Navigation.registerComponent('screen.homeTab', () => HomeTab);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        icon: HomeIcon,
        title: 'Home',
        screen: 'screen.homeTab'
      },
      {
        label: 'Settings',
        icon: SettingsIcon,
        title: 'Settings',
        screen: 'screen.welcome'
      }
    ],
    animationType: 'fade'
  });
}
