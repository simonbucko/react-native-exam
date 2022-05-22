import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import EditProfileScreen from '../screens/EditProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {SignupScreen,LoginScreen} from '../screens/auth';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import { StackParamList } from "../typings/navigations";
import { InitialScreen,EventsScreen,ChatScreen, HistoryScreen } from '../screens/onboarding';
import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ChatStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
    );
}

function ProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
    )
}

function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible:false, headerTitle:""}} >
            <Stack.Screen name="InitialScreen" component={InitialScreen}/>
            <Stack.Screen name="EventsScreen" component={EventsScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
    )
}


export default function Navigation() {
    const user = useSelector((state: RootState) => state.user.loggedInUser)
    const isOnboardingFinished = useSelector((state: RootState) => state.ui.isOnboardingFinished)

    return (
        <NavigationContainer>
            {user !== null ? (
                <Tab.Navigator screenOptions={{ headerShown: false }} >
                    <Tab.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            tabBarLabel: "HOME",
                            tabBarIcon: (tabInfo) => (<Ionicons name="home" size={24} color="black" />)
                        }} 
                        />
                    <Tab.Screen name="Chat" component={ChatStackNavigator} />
                    <Tab.Screen name="Menu" component={ProfileStackNavigator} />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {!isOnboardingFinished && <Stack.Screen name="OnboardingScreen" component={OnboardingNavigator} />}
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
