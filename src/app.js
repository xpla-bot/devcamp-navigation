import { Navigation } from 'react-native-navigation';
import Welcome from './Welcome';
import HomeIcon from './icons/home.png';
import SettingsIcon from './icons/settings.png';
import HomeTab from './HomeTab';
import SettingsTab from './SettingsTab';
import Login from './Login';

Navigation.registerComponent('screen.login', () => Login);
Navigation.registerComponent('screen.welcome', () => Welcome);
Navigation.registerComponent('screen.homeTab', () => HomeTab);
Navigation.registerComponent('screen.settingsTab', () => SettingsTab);

export function startTabbedApp() {
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
        screen: 'screen.settingsTab'
      }
    ],
    animationType: 'fade'
  });
}

export default function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      title: 'DevCamp Navigation',
      screen: 'screen.login'
    }
  });
}
