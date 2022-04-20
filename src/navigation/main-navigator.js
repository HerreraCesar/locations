import { COLORS } from "../constants";
import HeaderButton from "../components/atoms/header-button/header.button";
import Map from '../screens/map'
import NewPlace from "../screens/new-place";
import PlaceDetail from "../screens/place-detail";
import PlaceList from "../screens/place-list";
import {Platform} from 'react-native'
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const mainStack = createNativeStackNavigator()

const MainStackNavigator = () => {
    return (
        <mainStack.Navigator
            initialRouteName="Place"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
                },
                headerTintColor: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.light : COLORS.primary
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <mainStack.Screen
                name='Place'
                component={PlaceList}
                options={({navigation}) => (
                    {
                        title: 'Places',
                        headerRight: () => <HeaderButton navigation={navigation} />
                    }
                )}
            />
            <mainStack.Screen
                name='PlaceDetail'
                component={PlaceDetail}
                options={{
                    title: 'Place Details'
                }}
            />
            <mainStack.Screen
                name='NewPlace'
                component={NewPlace}
                options={{
                    title: 'New Place'
                }}
            />
            <mainStack.Screen
                name='Map'
                component={Map}
                options={{
                    title: 'Maps'
                }}
            />
            
        </mainStack.Navigator>
    )
}

export default MainStackNavigator