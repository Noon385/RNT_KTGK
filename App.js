import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './screens/Login';
import RegisterForm from './screens/Register';
import Home from './screens/Home';
import MyRouters from './router/Myrouters';
import { PaperProvider } from 'react-native-paper';
import { View } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MyRouters/>
        </PaperProvider>
    </NavigationContainer>

    
    
  );
}