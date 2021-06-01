import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

export interface HomeHeaderProps {}

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>

            <Icon
                reverse
                name="search"
                type="font-awesome"
                color="white"
                iconStyle={{ color: "black" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: "100%",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 30,
    },
    text: {
        fontWeight: "700",
        fontSize: 24,
    },
});
export default HomeHeader;
