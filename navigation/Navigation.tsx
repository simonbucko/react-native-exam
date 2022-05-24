import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import {DiscoverScreen,EventsScreen, BlogsScreen} from '../screens/discover';
import {SignupScreen,LoginScreen} from '../screens/auth';
import {ProfileScreen,EditProfileScreen} from '../screens/profile';
import { StackParamList } from "../typings/navigations";
import { InitialScreen,OnboardingEventsScreen,OnboardingChatScreen, HistoryScreen } from '../screens/onboarding';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Palette from '../styles/pallete';


const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function DiscoverStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="DiscoverScreen" 
                component={DiscoverScreen} 
                options={{
                    headerTitle: "DISCOVER",
                    headerTitleStyle: {...styles.screenTitle}
                }}
                />
            <Stack.Screen 
                name="EventsScreen" 
                component={EventsScreen} 
                options={{
                    headerTitle: "EVENTS",
                    headerTitleStyle: {...styles.screenTitle},
                    headerBackTitle: ""
                }}
                />
            <Stack.Screen 
                name="BlogsScreen" 
                component={BlogsScreen} 
                options={{
                    headerTitle: "BLOGS",
                    headerTitleStyle: {...styles.screenTitle},
                    headerBackTitle: ""
                }}
                />
        </Stack.Navigator>
    )
}

function ProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    headerTitle: "MENU",
                    headerTitleStyle: {...styles.screenTitle}
                }}
                />
            <Stack.Screen 
                name="EditProfile" 
                component={EditProfileScreen} 
                options={{
                    headerTitle: "EDIT PROFILE",
                    headerTitleStyle: {...styles.screenTitle},
                    headerBackTitle: ""
                }}
                />
        </Stack.Navigator>
    )
}

function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible:false, headerTitle:""}} >
            <Stack.Screen name="InitialScreen" component={InitialScreen}/>
            <Stack.Screen name="OnboardingEventsScreen" component={OnboardingEventsScreen} />
            <Stack.Screen name="OnboardingChatScreen" component={OnboardingChatScreen} />
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
                <Tab.Navigator screenOptions={{ headerShown: true, tabBarStyle: {height: 100} }}>
                    <Tab.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            tabBarLabel: "HOME",
                            tabBarIcon: (tabInfo) => (<Entypo name="home" size={24} color={tabInfo.focused ? Palette.primary : Palette.gray} />),
                            tabBarActiveTintColor: Palette.primary,
                            tabBarLabelStyle: styles.label,
                            headerTitle: "FEED",
                            headerTitleStyle: {...styles.screenTitle}
                        }} 
                        />
                    <Tab.Screen 
                        name="Discover" 
                        component={DiscoverStackNavigator} 
                        options={{
                            tabBarLabel: "DISCOVER",
                            tabBarIcon: (tabInfo) => (<FontAwesome name="search" size={24} color={tabInfo.focused ? Palette.primary : Palette.gray} />),
                            tabBarActiveTintColor: Palette.primary,
                            tabBarLabelStyle: styles.label,
                            headerTitle: "DISCOVER",
                            headerTitleStyle: {...styles.screenTitle},
                            headerShown: false
                        }}
                        />
                    <Tab.Screen 
                        name="Chat" 
                        component={ChatScreen} 
                        options={{
                            tabBarLabel: "CHAT",
                            tabBarIcon: (tabInfo) => (<Entypo name="chat" size={24} color={tabInfo.focused ? Palette.primary : Palette.gray} />),
                            tabBarActiveTintColor: Palette.primary,
                            tabBarLabelStyle: styles.label,
                            headerTitle: "CHAT",
                            headerTitleStyle: {...styles.screenTitle}
                        }}
                        />
                    <Tab.Screen
                        name="Menu" 
                        component={ProfileStackNavigator} 
                        options={{
                            tabBarLabel: "MENU",
                            tabBarIcon: (tabInfo) => (<Entypo name="menu" size={24} color={tabInfo.focused ? Palette.primary : Palette.gray} />),
                            tabBarActiveTintColor: Palette.primary,
                            tabBarLabelStyle: styles.label,
                            headerTitle: "MENU",
                            headerTitleStyle: {...styles.screenTitle},
                            headerShown: false
                        }}
                        />
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

const styles = StyleSheet.create({
    screenTitle:{
        color: Palette.primary,
        fontFamily: 'Teko_500Medium',
        fontSize: 26
    },
    label: {
        fontFamily: 'Teko_500Medium',
        fontSize: 16
    }
})
