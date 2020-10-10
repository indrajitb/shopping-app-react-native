import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ProductsNavigator, OrdersNavigator, AdminNavigator } from '../navigation/ShopNavigator';
import Colors from '../constants/Colors';

export default MainScreen = (props) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-home";
                    if (route.name === 'Products') {
                        iconName = Platform.OS === 'android' ? 'md-cart' : 'ios-cart';
                    }
                    else if (route.name === 'Orders') {
                        iconName = Platform.OS === 'android' ? 'md-list' : 'ios-list';
                    } else if (route.name === 'Admin') {
                        iconName = Platform.OS === 'android' ? 'md-create' : 'ios-create';
                    }

                    return <Ionicons name={iconName} size={23} color='{Colors.accent}' />
                },

            })}
            tabBarOptions={{
                activeTintColor: 'white', inactiveTintColor: Colors.accent,
                activeBackgroundColor: Colors.primary
            }}
        >
            <Tab.Screen name="Products" component={ProductsNavigator} />
            <Tab.Screen name="Orders" component={OrdersNavigator} />
            <Tab.Screen name="Admin" component={AdminNavigator} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});