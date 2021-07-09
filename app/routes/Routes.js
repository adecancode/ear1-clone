import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Login from '../screens/Login';
import Onboard from '../screens/Onboard';
import Username from '../screens/Username';
import Explore from '../screens/Explore';
import Room from '../screens/Room';
import Messages from '../screens/Messages';
import Activity from '../screens/Activity';
import Account from '../screens/Account';

const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
});

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none" screenOptions={{ animationEnabled: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Onboard" component={Onboard} />
                <Stack.Screen name="Username" component={Username} />
                <Stack.Screen name="Explore" component={Explore} options={{ cardStyleInterpolator: forFade }} />
                <Stack.Screen name="Room" component={Room} options={{ cardStyleInterpolator: forFade }} />
                <Stack.Screen name="Messages" component={Messages} options={{ cardStyleInterpolator: forFade }} />
                <Stack.Screen name="Activity" component={Activity} options={{ cardStyleInterpolator: forFade }} />
                <Stack.Screen name="Account" component={Account} options={{ cardStyleInterpolator: forFade }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}