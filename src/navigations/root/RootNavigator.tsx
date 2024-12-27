import AuthStackNavigator from '../stacks/AuthStackNavigator';
import MainDrawerNavigator from '../drawers/MainDrawerNavigator';

function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
