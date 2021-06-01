import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import HomeHeader from "./header";
import CardItem from "./CardItem";

export default function StorePage() {
    const fakeProducts = [
        {
            id: "12389046340965234",
            price: 5.5,
            title: "KONA Baby Blue - by the half-meter",
            description: "",
            rating: 5,
            image_url:
                "https://cdn11.bigcommerce.com/s-3rntvoamki/images/stencil/original/products/771/3725/K001-1010__47130.1622036064.jpg",
        },
        {
            id: "12389046340965233",
            price: 9.5,
            title: "RIFLE PAPER CO, PRIMAVERA Stars in Periwinkle Metallic - by the half-meter",
            description: "",
            rating: 5,
            image_url:
                "https://cdn11.bigcommerce.com/s-3rntvoamki/images/stencil/640w/products/320/1506/Stars_Periwinkle__14200.1605749349.jpg",
        },
    ];

    return (
        <View style={styles.container}>
            <HomeHeader />
            <FlatList
                data={fakeProducts}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(product) => product.id}
                renderItem={({ item }) => (
                    <CardItem
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        rating={item.rating}
                        image_url={item.image_url}
                    />
                )}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
    },
});
