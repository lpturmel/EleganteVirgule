import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/pages/login";
import Store from "./components/pages/store";

const AuthStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <AuthStack.Screen name="SignIn" component={Login} />
                <AuthStack.Screen name="Store" component={Store} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}
