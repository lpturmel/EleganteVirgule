import {
    StackNavigationConfig,
    StackNavigationProp,
} from "@react-navigation/stack/lib/typescript/src/types";
import React, { useState } from "react";
import { Image, View, StyleSheet, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type LoginScreenNavigationProp = StackNavigationProp<any, "Login">;
export interface LoginPageProps {
    navigation: LoginScreenNavigationProp;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (text: string, key: "email" | "password") => {
        setInputs((currentState) => {
            const newState = { ...currentState };
            newState[key] = text;
            return newState;
        });
    };
    const handleLogin = () => {
        navigation.push("Store");
    };
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://cdn11.bigcommerce.com/s-3rntvoamki/images/stencil/original/elegante_virgule_final_droite_331x100_1578262781__83329.original.jpg",
                }}
                style={styles.image}
            />
            <Text style={styles.title}>Login to your Account</Text>
            <TextInput
                textContentType="emailAddress"
                placeholder="Email"
                defaultValue={inputs.email}
                style={styles.input}
                onChangeText={(text) => handleInputChange(text, "email")}
                placeholderTextColor="black"
            />
            <TextInput
                secureTextEntry={true}
                textContentType="password"
                defaultValue={inputs.password}
                onChangeText={(text) => handleInputChange(text, "password")}
                placeholder="Password"
                style={styles.input}
                placeholderTextColor="black"
            />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.subheader}>Don't have an account?</Text>
                <Text style={styles.link}>Sign up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 20,
    },
    image: {
        marginTop: 110,
        marginBottom: 60,
        width: 340,
        height: 100,
    },
    title: {
        width: 300,
        textAlign: "left",
        fontWeight: "700",
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        backgroundColor: "white",
        width: 300,
        borderRadius: 10,
        paddingLeft: 20,
        height: 50,
        margin: 10,
    },
    button: {
        width: 300,
        backgroundColor: "#000042",
        marginTop: 40,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
    },
    subheader: {
        color: "#B8BABD",
    },
    link: {
        marginLeft: 5,
        color: "#000042",
    },
});

export default LoginPage;
