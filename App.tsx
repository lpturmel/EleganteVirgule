import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
    const handleOnPress = () => {
        console.log("hi");
    };
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <TouchableOpacity onPress={handleOnPress}>
                <Text>BUTTON</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
