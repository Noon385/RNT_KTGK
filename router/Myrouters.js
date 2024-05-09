import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterForm from "../screens/Register"
import LoginForm from '../screens/Login';
import Home from "../screens/Home"

const Stack = createNativeStackNavigator();

const MyRouters = () => {
    return (
        <Stack.Navigator initialRouteName='LoginForm' >
            <Stack.Screen name='LoginForm' component={LoginForm} />
            <Stack.Screen name='RegisterForm' component={RegisterForm} />
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    );
}

export default MyRouters;