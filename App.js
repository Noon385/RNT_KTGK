import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// import { PaperProvider } from 'react-native-paper';
// import BottomTabNavigator from './Routers/BottomTabNavigator';
// import DrawerNavigator from './Routers/DrawerNavigator';
// import MyRouters from './router/myrouter';
import LoginForm from './screens/Login';
import RegisterForm from './screens/Register';


export default function App() {
  return (
    // <NavigationContainer>
    //   <PaperProvider>
    //     {/* <BottomTabNavigator /> */}
    //     {/* <DrawerNavigator /> */}
    //     <MyRouters/>
    //   </PaperProvider>
    // </NavigationContainer>
    <LoginForm/>
    // <RegisterForm/>
  );
}