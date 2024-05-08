import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterForm from "../screens/Register"

const Stack = createNativeStackNavigator();

const MyRouters = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RegisterForm' component={RegisterForm} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}

export default MyRouters;