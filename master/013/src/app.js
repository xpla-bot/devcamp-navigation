import { Navigation } from 'react-native-navigation';
import Welcome from './Welcome';
import HomeIcon from './icons/home.png';
import SettingsIcon from './icons/settings.png';
import AddIcon from './icons/add.png';
import HomeTab from './HomeTab';
import SettingsTab from './SettingsTab';
import CounterTab from './CounterTab';
import Login from './Login';

Navigation.registerComponent('screen.login', () => Login);
Navigation.registerComponent('screen.welcome', () => Welcome);
Navigation.registerComponent('screen.homeTab', () => HomeTab);
Navigation.registerComponent('screen.settingsTab', () => SettingsTab);
Navigation.registerComponent('screen.counterTab', () => CounterTab);

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
        label: 'Counter',
        icon: AddIcon,
        title: 'Counter',
        screen: 'screen.counterTab',
        navigatorButtons: {
          rightButtons: [
            {
              title: 'Decrement',
              id: 'decrement'
            }
          ]
        }
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
