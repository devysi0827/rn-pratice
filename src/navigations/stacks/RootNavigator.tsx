import AuthStackNavigator from './AuthStackNavigator';
import MainDrawerNavigator from '../drawers/MainDrawerNavigator';

function RootNavigator() {
  const isLoggedIn = true;

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
