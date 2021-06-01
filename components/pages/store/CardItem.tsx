import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export interface CardItemProps {
    id: string;
    price: number;
    title: string;
    description: string;
    rating: number;
    image_url: string;
}

const CardItem: React.FunctionComponent<CardItemProps> = ({
    price,
    image_url,
    title,
    description,
}) => {
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>${price}</Text>
                    <Text>panier</Text>
                </View>
                <Image style={styles.image} source={{ uri: image_url }} />
                <View style={styles.body}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        position: "relative",
        flex: 1,
        width: 300,
        borderRadius: 10,
        flexDirection: "column",
        margin: 20,
        zIndex: 1001,
        elevation: 7,
    },
    shadow: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.79,
        shadowRadius: 4.65,
    },
    header: {
        opacity: 5,
        top: 0,
        left: 0,
        position: "absolute",
        zIndex: 100000,
        flex: 1,
        flexDirection: "row",
        width: "100%",
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: "space-between",

        padding: 10,
    },
    body: {
        flex: 1,
        flexDirection: "column",
        margin: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        margin: 10,
    },
    description: {
        fontWeight: "600",
        color: "black",
        margin: 10,
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: "100%",
        height: 250,
    },
});
export default CardItem;
